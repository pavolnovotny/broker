<template functional>
  <div class="container">
    <div class="Box">
      <div class="FlipBox">
        <div class="Front">
          <div class="centered">
            <h1 class="text-center FrontText">{{props.type}}</h1>
          </div>
          <img src="~/static/images/sell-property.jpg">
        </div>
        <div class="Back">
          <div>
            <p>{{props.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flip-card',
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.container {
  display:flex;
  justify-content:center;
  align-items:center;
}
.Box{
  position:relative;
  width:300px;
  min-height:250px;
  transform-style:preserve-3d;
  perspective:800px;
  transition:1s;
  margin:5px;
}
.Box .FlipBox{
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height: 100%;
  transition:1s;
  transform-style:preserve-3d;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.Box .Front,
.Box .Back{
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  cursor:pointer;
  transition:.5s;
  backface-visibility:hidden;
}
.Box .Front img{
  width:100%;
  height:100%;
}
.FrontText {
  color: white;
}
.Box .Back{
  background-color:#081a25;
  color:#fff;
  display:table;
  transform:rotateY(180deg);
}
.Box .Back div{
  display:table-cell;
  vertical-align:middle;
  text-align:center;
  padding:20px;
}
.Box .Back div h3{
  font-size:22px;
}
.Box .Back div p{
  font-size:17px;
  margin-top:10px;
}
.Box .Back div a{
  color:#fff;
  text-decoration:none;
  display:inline-block;
  margin-top:20px;
  width:120px;
  height:45px;
  background-color:#fff;
  color:#222;
  line-height:45px;
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
  transition:.5s;
  font-weight:bold;
}
.Box .Back div a:hover{
  background-color:#081a25;
  color:#fff;
}
.Box:hover .FlipBox{
  transform:rotateY(180deg);
}
.Box:hover{
  z-index:2;
}
@media (max-width:780px){
  .Box:not(:last-child):hover{
    transform:translateY(0px);
    z-index:2;
  }
}
@media (max-width:520px){
  .Box:hover{
    transform:translateY(0px);
    z-index:2;
  }
}
@media (max-width:255px){
  .Box{
    width:100%;
  }
}
</style>
