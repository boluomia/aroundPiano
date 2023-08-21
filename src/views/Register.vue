<template>
  <div class="login" id="app">
    <tipComp v-if="isEmpty == true">用户名或密码不能为空</tipComp>
    <tipComp v-if="isRegister == true">注册成功</tipComp>
    <tipComp v-if="usernameErr == true">用户名已存在</tipComp>
    <tipComp v-if="passwordErr == true">两次输入的密码不一致</tipComp>
    <header>
      <h1>钢琴之家</h1>
    </header>
    <main>
      <form action="" class="login-form">
        <input ref="username" type="text" placeholder="用户名" />
        <input ref="password1" type="password" placeholder="密码" />
        <input ref="password2" type="password" placeholder="重复密码" />
        <div class="box">
          <input type="submit" class="btn" value="注  册" @click="Register" />
          <input type="submit" class="btn" value="返  回" @click="Back" />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import tipComp from "@/components/Tip.vue";

export default {
  data() {
    return {
      isRegister: false,
      isEmpty: false,
      usernameErr: false,
      passwordErr: false,
    };
  },
  components: {
    tipComp,
  },
  methods: {
    Register() {
      // 打印用户名和密码
      const usernameInput = this.$refs.username;
      const password1Input = this.$refs.password1;
      const password2Input = this.$refs.password2;

      // 获取输入的用户名和密码
      const username = usernameInput.value;
      const password1 = password1Input.value;
      const password2 = password2Input.value;

      console.log("用户名:", username);
      console.log("密码:", password1);
      console.log("密码:", password2);
      if (
        password1.length === 0 ||
        password2.length === 0 ||
        username.length === 0
      ) {
        this.isEmpty = true;
        setTimeout(() => {
          this.isEmpty = false;
        }, 1000);
      } else if (password1 == password2) {
        var account_json = localStorage.getItem("account"); //得到字符串
        var account = JSON.parse(account_json); //转数组
        //如果是第一个注册的用户
        if (account_json == null) {
          account = [];
        }
        var flag = true;
        for (var i = 0; i < account.length; i++) {
          console.log(account[i]);
          if (account[i].username == username) {
            this.usernameErr = true;
            setTimeout(() => {
              this.usernameErr = false;
            }, 1000);
            flag = false;
            break;
          }
        }
        if (flag) {
          account.push({
            username: username,
            password: password1,
          });
          account_json = JSON.stringify(account); //转回字符串
          localStorage.setItem("account", account_json); //存入缓存
          this.isRegister = true;
          setTimeout(() => {
            this.isRegister = false;
          }, 1000);
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        }
      } else {
        this.passwordErr = true;
        setTimeout(() => {
          this.passwordErr = false;
        }, 1000);
      }
    },
    Back() {
      setTimeout(() => {
        this.$router.push("/login");
      }, 50);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  user-select: none;
}

#app {
  background: linear-gradient(to bottom, #894ca1, #5a0a7f);
  font-family: Arial, sans-serif;
  animation: gradientAnimation 5s ease infinite alternate-reverse;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.login {
  background-color: whitesmoke;
  width: 100%;
  min-height: 87vh;
  text-align: center;
  padding: 20px 40px;
  box-sizing: border-box;
}

header {
  margin-bottom: 20px;
}
main {
  padding: 20px 0px;
}

h1 {
  font-size: 42px;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  animation: glowAnimation 2s ease-in-out infinite alternate;
}

@keyframes glowAnimation {
  0% {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
      0 0 40px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 255, 255, 0.1);
  }
}

input {
  background-color: #f5f5f5;
  // width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: none;
  // border-color: #fff;
  border-radius: 4px;
  outline: none;
  font-size: 22px;
  padding: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  // animation: borderAnimation 2s ease-in-out infinite alternate;
}

// @keyframes borderAnimation {
//   0% {
//     border-color: #1d3380;
//   }
//   100% {
//     border-color: #28408f;
//   }
// }

.box {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.btn {
  background-color: #7d4792;
  width: 40%;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  // background-color: rgb(150, 26, 150);
}
</style>