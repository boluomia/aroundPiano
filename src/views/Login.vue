<template>
  <div id="app" class="login">
    <tipComp v-if="isErr == true">用户名或密码错误</tipComp>
    <tipComp v-if="isLogin == true">成功登录</tipComp>
    <header>
      <h1>钢琴之家</h1>
    </header>
    <main>
      <form action="" class="login-form">
        <input ref="username" type="text" placeholder="用户名" />
        <input ref="password" type="password" placeholder="密码" />
        <div class="button-group">
          <input type="submit" class="btn" value="登录" @click="Login" />
          <input type="submit" class="btn" value="注册" @click="Register" />
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
      isLogin: false,
      isErr: false
    };
  },
  components: {
    tipComp,
  },
  created() {
    localStorage.setItem("isLoggedIn", "false");
  },
  methods: {
    Register() {
      setTimeout(() => {
        this.$router.push("/register");
      }, 50);

      //this.$router.push("/register");
    },
    Login() {
      // const password = passwordInput.value;
      // 用户名和密码
      const usernameInput = this.$refs.username;
      const passwordInput = this.$refs.password;

      // 获取输入的用户名和密码
      const username = usernameInput.value;
      const password = passwordInput.value;

      console.log("用户名:", username);
      console.log("密码:", password);

      var account_json = localStorage.getItem("account");
      //转成数组
      var account = JSON.parse(account_json);
      if (account_json == null) {
        account = [];
      }
      for (var i = 0; i < account.length; i++) {
        console.log(account[i]);
        if (
          account[i].username == username &&
          account[i].password == password
        ) {
          this.isLogin = true;
          setTimeout(() => {
            this.isLogin = false;
          }, 1000);

          setTimeout(() => {
          localStorage.setItem("isLoggedIn", "true");
          this.$router.push("/");
          }, 1000);
          // localStorage.setItem("isLoggedIn", "true");
          // this.$router.push("/");
          return;
        }
      }
      localStorage.setItem("isLoggedIn", "false");
      this.isErr = true;
          setTimeout(() => {
            this.isErr = false;
          }, 1000);
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

.button-group {
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