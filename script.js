const changelogo = () => {
    const logo = document.getElementById('logo');
    logo.src = 'logo1.jpg';  // Change this to the path of your new image
};

const reset = () => {
    const logo = document.getElementById('logo');
    logo.src = 'logo2.jpg';  // Change this to the path of your old image
};