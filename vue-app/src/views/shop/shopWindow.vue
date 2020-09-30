<template>
<div>
  <button class="btn">button</button>

    <div class="one p"></div>
    <div class="two p"></div>
    <div class="three p"></div>

</div>
</template>

<script>
export default {
name: "shopWindow"
}
</script>

<style scoped lang="scss">
.btn{
  width: 100px;
  height: 30px;
  color: #FFF;
  font-size: 1.2em;
  text-align: center;
  line-height: 30px;
  background-color: black;
  top:50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -50px;
  position: absolute;
}
.btn::after{
  width: 20px;
  height: 20px;
  content: "";
  right: -10px;
  top: 5px;
  position: absolute;
  display: block;
  background: #FFF;
  border-radius: 20px;
}
.p{
  width: 100px;
  height: 100px;
  background-color: #000;
  float: left;
}
.one{
  border-radius: 0 40px 0 0;
}
.two{
  margin-top: 30px;
  height: 70px;
  margin-left: -2px;
}
.two::after{
  content: '';
  position: absolute;
  margin-top: -60px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #fff;
}
.three{
  margin-left: -2px;
  border-radius: 40px 0 0 0;
}
</style>
