<template>
  <footer class="footer-main__container">
    <div class="contacts-icons">
      <a target="_blank" href="https://www.behance.net/artempolozov-beh"><img src="../assets/icons/behance.svg"></a>
      <a target="_blank" class="indent-left" href="https://github.com/artempolozov-git"><img src="../assets/icons/github.svg"></a>
      <a target="_blank" class="indent-left" href="https://spb.hh.ru/resume/28665ee0ff0906b2ad0039ed1f735078526a57"><img src="../assets/icons/hh.svg"></a>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "app-footer"
    }
</script>

<style scoped>
.footer-main__container {
  border-top: 1px solid rgba(33, 33, 33, 0.1);
  padding: 30px 60px;
  box-sizing: border-box;
}
.contacts-icons {
  display: flex;
  align-items: center;
}
.indent-left {
  margin-left: 20px;
}
img {
  width: 2vw;
  opacity: 0.5;
}
img:hover {
  opacity: 1;
}
</style>