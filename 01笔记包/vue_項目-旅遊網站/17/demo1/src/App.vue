<template>
  <div>
      <router-link to='/a' tag='button'>
        AAAA
      </router-link>

      <router-link to='/b' tag='button'>
        BBBB
      </router-link>

      <keep-alive include='ccc,ddd'>
        <router-view></router-view>
      </keep-alive>

  </div>
</template>