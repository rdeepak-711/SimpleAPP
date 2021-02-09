function changeBackground() {
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'purple' ];

    const color = Math.floor(Math.random()*colors.length);
    console.log(colors[color]);
    document.body.style.background = colors[color];
}