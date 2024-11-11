function main(){
  const canvas=document.querySelector("canvas");
  const gl=canvas.getContext("webgl2");
  if(!gl){
    console.log("Webgl not supported by your browser");
    return;
  }
  gl.clearColor(0,0,0,1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
main();