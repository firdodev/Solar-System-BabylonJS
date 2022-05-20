window.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('renderCanvas');

    const engine = new BABYLON.Engine(canvas, true);

    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera('Camera', 1.2, 1.1, 10, BABYLON.Vector3.Zero(), scene);

    camera.attachControl(canvas, true);


    //Light

    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.5;
    light.groundColor = new BABYLON.Color3(0, 0, 1);

    scene.clearColor = new BABYLON.Color3(0,0,0);

    //Add Materials

    const sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);
    sunMaterial.emissiveTexture = new BABYLON.Texture('assets/images/601x301_texture_sun.jpg', scene);
    sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const mercuryMaterial = new BABYLON.StandardMaterial('mercuryMat', scene);
    mercuryMaterial.diffuseTexture = new BABYLON.Texture('assets/images/500x250_mercury.jpg', scene);
    mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const venusMaterial = new BABYLON.StandardMaterial('venusMat', scene);
    venusMaterial.diffuseTexture = new BABYLON.Texture('assets/images/500x250_texture_venus_surface.jpg', scene);
    venusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const earthMaterial = new BABYLON.StandardMaterial('earthMat', scene);
    earthMaterial.diffuseTexture = new BABYLON.Texture('assets/images/601x301_texture_earth_surface.jpg', scene);
    earthMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const marsMaterial = new BABYLON.StandardMaterial('marsMat', scene);
    marsMaterial.diffuseTexture = new BABYLON.Texture('assets/images/400x200_texture_mars.jpg', scene);
    marsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const jupiterMaterial = new BABYLON.StandardMaterial('jupiterMat', scene);
    jupiterMaterial.diffuseTexture = new BABYLON.Texture('assets/images/500x250_texture_jupiter.jpg', scene);
    jupiterMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const saturnMaterial = new BABYLON.StandardMaterial('saturnMat', scene);
    saturnMaterial.diffuseTexture = new BABYLON.Texture('assets/images/601x301_texture_saturn.jpg', scene);
    saturnMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const uranusMaterial = new BABYLON.StandardMaterial('uranusMat', scene);
    uranusMaterial.diffuseTexture = new BABYLON.Texture('assets/images/400x200_texture_uranus.jpg', scene);
    uranusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const neptuneMaterial = new BABYLON.StandardMaterial('neptuneMat', scene);
    neptuneMaterial.diffuseTexture = new BABYLON.Texture('assets/images/400x200_texture_neptune.jpg', scene);
    neptuneMaterial.specularColor = new BABYLON.Color3(0, 0, 0);


    const sunLight = new BABYLON.PointLight('sunLight', BABYLON.Vector3.Zero(), scene);
    sunLight.intensity = 2;


    //Create Planets
    const sun = BABYLON.Mesh.CreateSphere('sun', 16, 8, scene);
    sun.material = sunMaterial;

    const mercury = BABYLON.Mesh.CreateSphere('mercury', 16, 1, scene);
    mercury.position.x = 6;
    mercury.material = mercuryMaterial;
    mercury.orbit = {
        radius: mercury.position.x,
        speed: 0.03,
        angle: 0
    };

    const venus = BABYLON.Mesh.CreateSphere('venus', 16, 1.5, scene);
    venus.position.x = 8.5;
    venus.material = venusMaterial;
    venus.orbit = {
        radius: venus.position.x,
        speed: 0.01,
        angle: 0
    };

    const earth = BABYLON.Mesh.CreateSphere('earth', 16, 2.5, scene);
    earth.position.x = 12;
    earth.material = earthMaterial;
    earth.orbit = {
        radius: earth.position.x,
        speed: 0.015,
        angle: 0
    };

    const mars = BABYLON.Mesh.CreateSphere('mars', 16, 1, scene);
    mars.position.x = 16;
    mars.material = marsMaterial;
    mars.orbit = {
        radius: mars.position.x,
        speed: 0.017,
        angle: 0
    };

    const jupiter = BABYLON.Mesh.CreateSphere('jupiter', 16, 4, scene);
    jupiter.position.x = 21;
    jupiter.material = jupiterMaterial;
    jupiter.orbit = {
        radius: jupiter.position.x,
        speed: 0.005,
        angle: 0
    };

    const saturn = BABYLON.Mesh.CreateSphere('saturn', 14, 4, scene);
    saturn.position.x = 28;
    saturn.material = saturnMaterial;
    saturn.orbit = {
        radius: saturn.position.x,
        speed: 0.002,
        angle: 0
    };

    const uranus = BABYLON.Mesh.CreateSphere('uranus', 17, 4, scene);
    uranus.position.x = 32;
    uranus.material = uranusMaterial;
    uranus.orbit = {
        radius: uranus.position.x,
        speed: 0.011,
        angle: 0
    };

    const neptune = BABYLON.Mesh.CreateSphere('neptune', 16, 4, scene);
    neptune.position.x = 36;
    neptune.material = neptuneMaterial;
    neptune.orbit = {
        radius: neptune.position.x,
        speed: 0.009,
        angle: 0
    };

    const pluto = BABYLON.Mesh.CreateSphere('pluto', 16, 0.5, scene);
    pluto.position.x = 40;
    pluto.material = mercuryMaterial;
    pluto.orbit = {
        radius: pluto.position.x,
        speed: 0.007,
        angle: 0
    };

    //skybox 
    const skybox = BABYLON.Mesh.CreateBox('skyBox', 1000.0, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene);

    skyboxMaterial.backFaceCulling = false;
    skybox.infiniteDistance = true;
    skybox.material = skyboxMaterial;

    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/images/skybox', scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

    //Animation
    scene.beforeRender = function(){
        mercury.position.x = mercury.orbit.radius * Math.sin(mercury.orbit.angle);
        mercury.position.z = mercury.orbit.radius * Math.cos(mercury.orbit.angle);
        mercury.orbit.angle += mercury.orbit.speed;

        venus.position.x = venus.orbit.radius * Math.sin(venus.orbit.angle);
        venus.position.z = venus.orbit.radius * Math.cos(venus.orbit.angle);
        venus.orbit.angle += venus.orbit.speed;

        earth.position.x = earth.orbit.radius * Math.sin(earth.orbit.angle);
        earth.position.z = earth.orbit.radius * Math.cos(earth.orbit.angle);
        earth.orbit.angle += earth.orbit.speed;

        mars.position.x = mars.orbit.radius * Math.sin(mars.orbit.angle);
        mars.position.z = mars.orbit.radius * Math.cos(mars.orbit.angle);
        mars.orbit.angle += mars.orbit.speed;


        jupiter.position.x = jupiter.orbit.radius * Math.sin(jupiter.orbit.angle);
        jupiter.position.z = jupiter.orbit.radius * Math.cos(jupiter.orbit.angle);
        jupiter.orbit.angle += jupiter.orbit.speed;

        saturn.position.x = saturn.orbit.radius * Math.sin(saturn.orbit.angle);
        saturn.position.z = saturn.orbit.radius * Math.cos(saturn.orbit.angle);
        saturn.orbit.angle += saturn.orbit.speed;

        saturn.position.x = saturn.orbit.radius * Math.sin(saturn.orbit.angle);
        saturn.position.z = saturn.orbit.radius * Math.cos(saturn.orbit.angle);
        saturn.orbit.angle += saturn.orbit.speed;

        uranus.position.x = uranus.orbit.radius * Math.sin(uranus.orbit.angle);
        uranus.position.z = uranus.orbit.radius * Math.cos(uranus.orbit.angle);
        uranus.orbit.angle += uranus.orbit.speed;

        neptune.position.x = neptune.orbit.radius * Math.sin(neptune.orbit.angle);
        neptune.position.z = neptune.orbit.radius * Math.cos(neptune.orbit.angle);
        neptune.orbit.angle += neptune.orbit.speed;

        pluto.position.x = pluto.orbit.radius * Math.sin(pluto.orbit.angle);
        pluto.position.z = pluto.orbit.radius * Math.cos(pluto.orbit.angle);
        pluto.orbit.angle += pluto.orbit.speed;
    };


    engine.runRenderLoop(function (){
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });
});