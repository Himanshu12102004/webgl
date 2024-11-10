function main() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    alert("your browser doesn't support 2d graphics");
    return;
  }
  ctx.fillStyle = 'rgba(0,0,255,1)';
  ctx.fillRect(100, 20, 300, 300);
}

main();
