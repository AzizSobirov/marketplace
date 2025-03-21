<template>
  <div
    class="file-upload"
    :class="{ 'has-image': previewImage || preview, sm: size === 'sm' }"
    @click="triggerFileInput"
  >
    <input
      type="file"
      ref="fileInput"
      @change="handleFileUpload"
      accept="image/*"
      hidden
    />
    <div v-if="previewImage || preview" class="image-preview">
      <img :src="previewImage || preview" alt="Preview" />
    </div>
    <div v-else class="upload-placeholder">
      <svg
        width="55"
        height="44"
        viewBox="0 0 55 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.5 0H5.5C2.46675 0 0 2.46675 0 5.5V38.5C0 41.5332 2.46675 44 5.5 44H49.5C52.5332 44 55 41.5332 55 38.5V5.5C55 2.46675 52.5332 0 49.5 0ZM12.375 8.25C13.469 8.25 14.5182 8.6846 15.2918 9.45818C16.0654 10.2318 16.5 11.281 16.5 12.375C16.5 13.469 16.0654 14.5182 15.2918 15.2918C14.5182 16.0654 13.469 16.5 12.375 16.5C11.281 16.5 10.2318 16.0654 9.45818 15.2918C8.6846 14.5182 8.25 13.469 8.25 12.375C8.25 11.281 8.6846 10.2318 9.45818 9.45818C10.2318 8.6846 11.281 8.25 12.375 8.25ZM27.5 35.75H8.25L19.25 22L23.375 27.5L31.625 16.5L46.75 35.75H27.5Z"
          fill="#505564"
          fill-opacity="0.38"
        />
      </svg>
      <p>
        Кликните в область, <br />
        чтобы загрузить обложку
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  props: {
    preview: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
          this.$emit("change", file); // Emit event with file data
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.file-upload {
  width: 100%;
  height: rem(250);
  background: #0f1015;
  border: rem(2) dashed #2c3242;
  border-radius: rem(12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.has-image {
    border: none;
  }

  &.sm {
    height: rem(100);
    border-radius: rem(6);
    border-width: rem(1);

    .upload-placeholder {
      svg {
        width: rem(35);
        height: rem(28);
      }

      p {
        display: none;
      }
    }
  }

  &:hover {
    border-color: var(--primary);
  }

  .upload-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(22);
    cursor: pointer;

    svg {
      width: rem(55);
      height: rem(44);
    }

    p {
      font-weight: 400;
      font-size: rem(14);
      line-height: 154%;
      text-align: center;
      color: #505564;
    }
  }

  .image-preview {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
