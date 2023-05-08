<template>
  <div class="card3d">
    <h2>My Model</h2>
    <p>sofa</p>
    <div ref="container"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

export default {
  props: {
    modelUrl: {
      type: String,
      required: true,
      default: "My Model"
    }
  },
  data() {
    return {
      scale: 1,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // Create the scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff); // set the background color to white


      // Create the camera
      const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      );
      camera.position.z = 5;

      // Create the renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(renderer.domElement);

      // Load the GLTF object
      const loader = new GLTFLoader();
      loader.load("http://localhost:9090/api/glb/"+this.modelUrl, (gltf) => {
        const model = gltf.scene;

        // Calculate the center of mass
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Create a group and add the model to it
        const group = new THREE.Group();
        group.position.copy(center);
        group.add(model);
        scene.add(group);

        // Add pointer lock controls
        const controls = new PointerLockControls(camera, renderer.domElement);
        this.$refs.container.addEventListener("click", () => {
          controls.lock();
        });

        // Add mouse wheel event listener to scale the object
        this.$refs.container.addEventListener("wheel", (event) => {
          event.preventDefault();
          this.scale += event.deltaY * 0.001;
          group.scale.set(this.scale, this.scale, this.scale);
        });

        // Animate the model
        const animate = () => {
          requestAnimationFrame(animate);
          group.rotation.y += 0.01; // rotate the group around the y-axis
          renderer.render(scene, camera);
        };
        animate();
      });
    },
  },
};
</script>
<style scoped>
.card3d {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>