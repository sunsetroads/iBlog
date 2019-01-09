<template>
  <div id="menu-espanso" :class="{'expand': isActive}">
    <div id="menu-group">
      <div id="menu" class="menu">
        <div id="menu-in" class="menu-in" :class="{'over': isActive}"></div>
      </div>
      <span class="menu-closer" @click="clickmenu"></span>
      <span class="linee linea1" :class="{'overL1': isActive}"></span>
      <span class="linee linea2" :class="{'overL2': isActive}"></span>
      <span class="linee linea3" :class="{'overL3': isActive}"></span>
    </div>
    <the-sidebar class="voci-menu" :class="{'overvoci': isActive}"/>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'

export default {
  name: "TheMenu",
  data () {
    return {
      isActive: false
    };
  },
  methods: {
    clickmenu(){
      this.isActive = !this.isActive
    }
  },
  components: {
    TheSidebar
  }
}
</script>

<style scoped>
#menu-espanso {
  background-color: transparent;
  position: fixed;
  width: 80px;
  height: 100px;
  top: 0;
  right: 0;
  overflow: hidden!important;
  z-index: 5;
  transition: all .55s ease-in
}

#menu-espanso.expand {
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  overflow: hidden!important;
  transition: unset
}

.menu, .linee {
  cursor: pointer
}

.menu-in {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background-color: #176069;
  border: none;
  transition: all .4s ease-out;
  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, .22)
}

.menu {
  position: absolute;
  right: 0;
  margin: 20px 15px 0 0;
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  transition: all .4s ease-out
}

.over {
  width: 4000px;
  height: 4000px;
  transition: all .35s ease-in;
  cursor: default
}

.linea1 {
  background: #fff;
  height: 2px;
  width: 15px;
  position: absolute;
  right: 31px;
  top: 40px;
  transition: all .3s;
}

.linea2 {
  background: #fff;
  height: 2px;
  width: 15px;
  position: absolute;
  right: 31px;
  top: 45px;
  opacity: 1;
  transition: opacity .5s
}

.linea3 {
  background: #fff;
  height: 2px;
  width: 15px;
  position: absolute;
  right: 31px;
  top: 50px
}

.overL1 {
  animation: closetop 1s forwards;
  cursor: pointer
}

.overL2 {
  opacity: 0;
  transition: opacity .5s;
  cursor: pointer
}

.overL3 {
  animation: closebottom 1s forwards;
  cursor: pointer
}

.menu-closer {
  position: absolute;
  right: 0;
  margin: 20px 15px 0 0;
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 5
}

.voci-menu {
  visibility: hidden;
  position: absolute;
  opacity: 0;
  transition: all .3s;
  transition-delay: 0s
}

.overvoci {
  visibility: visible;
  opacity: 1;
  transition: all .4s;
  transition-delay: .37s
}


@keyframes closetop {
  0% {
    transform: translateY(5px) rotate(0deg)
  }
  25% {
    transform: translateY(5px) rotate(0deg)
  }
  75% {
    transform: translateY(5px) rotate(-45deg)
  }
  100% {
    transform: translateY(5px) rotate(-45deg)
  }
}

@keyframes closebottom {
  0% {
    transform: translateY(0px) rotate(0deg)
  }
  25% {
    transform: translateY(-5px) rotate(0deg)
  }
  75% {
    transform: translateY(-5px) rotate(45deg)
  }
  100% {
    transform: translateY(-5px) rotate(45deg)
  }
}
</style>
