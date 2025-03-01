<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <div class="sidebar__logo-title">MarketPlace</div>
      <p class="sidebar__logo-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>

    <div class="sidebar__menu">
      <router-link
        v-for="item in menu"
        :key="item.name"
        :to="item.path"
        class="sidebar__menu-item"
      >
        <span v-html="item.icon"></span>
        <span>{{ item.name }}</span>
      </router-link>

      <div class="sidebar__menu-seperator"></div>

      <router-link
        v-for="item in menu2"
        :key="item.name"
        :to="item.path"
        class="sidebar__menu-item"
      >
        <span v-html="item.icon"></span>
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menu: [
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.592 9.817c.996 0 1.793.806 1.793 1.808v2.407c0 .996-.797 1.808-1.793 1.808H3.206a1.804 1.804 0 01-1.794-1.808v-2.407a1.8 1.8 0 011.794-1.808h2.386zm8.148 0a1.8 1.8 0 011.794 1.808v2.407c0 .996-.805 1.808-1.794 1.808h-2.386a1.799 1.799 0 01-1.794-1.808v-2.407c0-1.002.798-1.808 1.794-1.808h2.386zM5.592 1.365c.989 0 1.793.812 1.793 1.808V5.58a1.799 1.799 0 01-1.793 1.808H3.206A1.795 1.795 0 011.412 5.58V3.173a1.8 1.8 0 011.794-1.808h2.386zM13.74 1.386c.989 0 1.794.812 1.794 1.809v2.407a1.799 1.799 0 01-1.794 1.807h-2.386A1.795 1.795 0 019.56 5.602V3.195a1.8 1.8 0 011.794-1.809h2.386z" fill="currentColor"/></svg>',
          name: "Аукцион",
          path: "/auctions",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_73)"><path d="M.593 7.355A.261.261 0 01.63 6.98l7.23-5.942a1.037 1.037 0 011.28 0l7.23 5.942a.263.263 0 01.038.375l-.562.667a.266.266 0 01-.371.035L8.668 2.465a.258.258 0 00-.335 0l-6.81 5.591a.266.266 0 01-.372-.034l-.558-.667zm15.61 8.33H.797a.266.266 0 00-.266.265v.532a.266.266 0 00.266.265h15.406a.266.266 0 00.266-.265v-.532a.266.266 0 00-.266-.265zm-8.765-.531V9.31H4.25v5.844h3.188zM10.89 9.31H9.563v1.062h1.328V9.31zm0 1.594H9.563v1.062h1.328v-1.062zm1.86-1.594h-1.329v1.062h1.328V9.31zm0 1.594h-1.329v1.062h1.328v-1.062zm-4.782 4.25v-6.11a.266.266 0 00-.266-.265H3.985a.266.266 0 00-.266.265v6.11H2.125V8.25L8.5 3.012l6.375 5.238v5.602a.062.062 0 00-.021-.005 1.452 1.452 0 00-2.614 0c-.256.05-.491.176-.675.36a1.338 1.338 0 00-.409.947H7.97zm1.062-2.922a.266.266 0 00.266.265h3.719a.266.266 0 00.265-.265V9.044a.266.266 0 00-.265-.265H9.297a.266.266 0 00-.266.265v3.188zm5.844-10.89a.533.533 0 00-.531-.532h-2.125a.533.533 0 00-.531.531v1.105l3.187 2.62V1.34zm.28 13.244a.717.717 0 00-.48-.222.262.262 0 01-.254-.178.922.922 0 00-1.747 0 .266.266 0 01-.255.178.699.699 0 00-.48.222.809.809 0 00-.251.568h3.718a.809.809 0 00-.25-.568z" fill="currentColor"/></g><defs><clipPath id="prefix__clip0_0_73"><path fill="#fff" transform="translate(0 .279)" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Недвижимость",
          path: "#",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_78)"><path d="M15.552 7.075l-.44-3.792a1.825 1.825 0 00-1.813-1.63h-9.6c-.934 0-1.703.696-1.813 1.63l-.44 3.792C.586 7.405 0 8.229 0 9.145v4.067a.59.59 0 00.55.55h.55v1.593a.59.59 0 00.549.55h3.114a.54.54 0 00.55-.55v-1.594h6.375v1.594c0 .312.238.55.55.55h3.113a.59.59 0 00.55-.55v-1.594h.55a.59.59 0 00.549-.55V9.146c0-.916-.586-1.74-1.447-2.07zM2.985 3.411a.732.732 0 01.714-.66h9.6c.366 0 .677.294.714.66l.403 3.536H2.582l.403-3.536zM5 11.471H2.893c-.293.019-.53-.22-.55-.512V9.859a.54.54 0 01.55-.55h2.07a.54.54 0 01.55.55v1.063c.018.293-.22.531-.513.55zm5.294-.567h-3.59v-1.1h3.59v1.1zm3.847.568h-2.106c-.293.018-.532-.22-.55-.513V9.859a.54.54 0 01.55-.55h2.07a.54.54 0 01.55.55v1.063c.018.293-.22.531-.514.55z" fill="currentColor"/></g><defs><clipPath id="prefix__clip0_0_78"><path fill="#fff" transform="translate(0 .279)" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Транспорт",
          path: "#",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_84)" fill="currentColor"><path d="M10.625 3.342v-.004l3.181 1.425L17 3.565 8.5.378 0 3.565l8.5 3.188 3.181-1.193L8.5 4.249v-.004l2.125-.903zM0 4.628v9.562l7.969 2.99V7.616L0 4.627zm4.25 9.598l-2.125-.797v-1.134l2.125.797v1.133zM13.813 5.823v2.662l-2.126.797V6.62l-2.656.997v9.562L17 14.19V4.628l-3.188 1.195z"/></g><defs><clipPath id="prefix__clip0_0_84"><path fill="#fff" transform="translate(0 .279)" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Предметы",
          path: "#",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_96)"><path d="M14.28 10.139l-1.247-2.494a1.19 1.19 0 00-1.02-.566H4.987a1.19 1.19 0 00-1.02.566L2.72 10.14l-1.405 1.305a.566.566 0 00-.182.416v4.852a.567.567 0 00.567.567h2.267c.226 0 .566-.227.566-.454v-.68h7.934v.567c0 .227.226.567.453.567h2.38a.567.567 0 00.567-.567V11.86a.566.566 0 00-.182-.416L14.28 10.14zM5.1 8.212h6.8l1.133 2.267H3.967L5.1 8.212zm.567 5.213c0 .227-.34.454-.567.454H2.72c-.227 0-.453-.34-.453-.567v-1.247c.113-.34.34-.566.68-.453l2.266.453c.227 0 .454.34.454.567v.793zm9.066-.113c0 .227-.226.567-.453.567H11.9c-.227 0-.567-.227-.567-.454v-.793c0-.227.227-.567.454-.567l2.266-.453c.34-.113.567.113.68.453v1.247zM15.3.279h-2.833a1.134 1.134 0 00-1.134 1.133H2.267L1.133 2.545V3.68l1.134 1.133 1.7-1.7 1.7 1.7 1.7-1.7 1.7 1.7h2.266a1.133 1.133 0 001.134 1.133H15.3a.567.567 0 00.567-.566V.845A.567.567 0 0015.3.28zm-.567 3.966a.567.567 0 11-1.133 0V1.98a.567.567 0 011.133 0v2.266z" fill="currentColor"/></g><defs><clipPath id="prefix__clip0_0_96"><path fill="#fff" transform="translate(0 .279)" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Аренда транспорта",
          path: "#",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_100)" fill="currentColor"><path d="M11.907 15.532H5.093c-.364 0-.719-.08-1.043-.228v1.228c0 .275.223.498.498.498h7.904a.498.498 0 00.498-.498v-1.228c-.324.149-.68.228-1.043.228zM8.002 4.794L5.212.675l-2.458.727a.666.666 0 00-.356 1.019l1.31 1.878c.52.743.744 1.652.632 2.551l-.566 4.53 1.54-1.543a.498.498 0 11.705.704l-2.437 2.441a1.513 1.513 0 001.511 1.554h2.909V4.794zM10.684.527H6.315L8.5 3.753 10.684.527zM10.98 10.541a.498.498 0 11.705-.704l1.54 1.543-.565-4.53c-.112-.9.113-1.808.631-2.55l1.311-1.879a.666.666 0 00-.356-1.02L11.787.676 8.998 4.793v9.743h2.909c.859 0 1.534-.712 1.51-1.553l-2.437-2.442zm-.435-5.125a.5.5 0 01.498-.498.5.5 0 01.498.498.5.5 0 01-.498.498.502.502 0 01-.498-.498zM2.38 16.03h-.748c-.488 0-.962-.137-1.37-.387l-.084.84a.498.498 0 00.495.547h1.993c.255 0 .47-.194.495-.449l.07-.692a2.617 2.617 0 01-.851.141z"/><path d="M3.214 14.684a2.513 2.513 0 01-.61-1.974l.748-5.983a2.663 2.663 0 00-.46-1.857L1.581 2.99a1.66 1.66 0 01-.275-.674.847.847 0 00-.034.156L.012 13.209a1.636 1.636 0 001.62 1.825h.748c.332 0 .644-.1.904-.275a2.578 2.578 0 01-.07-.075zM16.738 15.643c-.408.25-.882.387-1.37.387h-.748c-.292 0-.579-.048-.85-.142l.069.693c.025.255.24.449.495.449h1.992a.498.498 0 00.496-.548l-.084-.839zM16.989 13.21l-1.26-10.737a.847.847 0 00-.035-.156c-.04.24-.132.47-.275.674L14.108 4.87a2.662 2.662 0 00-.46 1.857l.748 5.983a2.513 2.513 0 01-.68 2.05c.26.173.572.274.905.274h.747a1.632 1.632 0 001.621-1.825z"/></g><defs><clipPath id="prefix__clip0_0_100"><path fill="#fff" transform="translate(0 .279)" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Одежда и аксессуары",
          path: "#",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_111)"><path d="M11.83 5.945A2.125 2.125 0 009.916 4.53H7.084a2.125 2.125 0 000 4.25h2.833a2.125 2.125 0 010 4.25H7.084a2.125 2.125 0 01-1.913-1.417m3.33-9.208v2.125m0 8.5v2.125" stroke="currentColor" stroke-width="1.417" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="prefix__clip0_0_111"><path fill="#fff" transform="translate(0 .279)" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Услуги и прочее",
          path: "#",
        },
        {
          icon: '<svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.171 4.194h-3.27V2.932a.978.978 0 00-.98-.98h-4.92a.978.978 0 00-.978.98v1.262H1.829c-.876 0-1.571.72-1.571 1.57v.902l7.315 3.4c.051-.489.438-.875.927-.875a.93.93 0 01.928.875l7.315-3.4v-.901c0-.85-.696-1.571-1.572-1.571zm-3.786 0H5.538V2.932c0-.258.206-.464.464-.464h4.92c.257 0 .463.206.463.464v1.262z" fill="currentColor"/><path d="M8.938 11.251v-1.107a.434.434 0 00-.438-.438.42.42 0 00-.438.438v1.107c0 .232.18.438.438.438a.434.434 0 00.438-.438z" fill="currentColor"/><path d="M9.453 11.251a.95.95 0 01-.953.953.935.935 0 01-.953-.953v-.618l-7.29-3.4v6.8c0 .876.696 1.571 1.572 1.571h13.342c.876 0 1.572-.695 1.572-1.57v-6.8l-7.29 3.4v.617zm-6.31.825c.54 0 .978.438.978.978 0 .438-.309.825-.72.928v.18c0 .154-.104.257-.258.257-.155 0-.258-.103-.258-.257v-.18a.966.966 0 01-.721-.928c0-.154.103-.257.257-.257.155 0 .258.103.258.257 0 .258.206.464.464.464a.462.462 0 00.463-.464.462.462 0 00-.463-.463.978.978 0 01-.98-.98c0-.437.31-.823.722-.926v-.18c0-.155.103-.258.258-.258.154 0 .257.103.257.257v.18c.412.104.721.49.721.928 0 .155-.103.258-.257.258-.155 0-.258-.103-.258-.258a.462.462 0 00-.463-.464.462.462 0 00-.464.464c0 .258.206.464.464.464z" fill="currentColor"/></svg>',
          name: "Бизнес",
          path: "#",
        },
      ],
      menu2: [
        {
          icon: '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.805 3.595V15.05a1.48 1.48 0 01-.913 1.395 1.51 1.51 0 01-1.65-.291L8.5 11.652l-4.743 4.502a1.495 1.495 0 01-1.649.291 1.48 1.48 0 01-.913-1.395V3.595c0-1.75 1.42-3.17 3.17-3.17h8.27c1.75 0 3.169 1.42 3.17 3.17z" fill="currentColor"/></svg>',
          name: "Избранное",
          path: "/warehouse",
        },
        {
          icon: '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_127)" fill="currentColor"><path d="M10.625 3.064v-.005l3.181 1.425L17 3.287 8.5.099 0 3.287l8.5 3.187 3.181-1.193L8.5 3.971v-.004l2.125-.903zM0 4.35v9.562L7.969 16.9V7.338L0 4.35zm4.25 9.597l-2.125-.797v-1.134l2.125.797v1.134zM13.813 5.545v2.661l-2.126.797V6.342l-2.656.996v9.563L17 13.91V4.35l-3.188 1.196z"/></g><defs><clipPath id="prefix__clip0_0_127"><path fill="#fff" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Склад хранения",
          path: "/warehouse2",
        },
        {
          icon: '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_139)"><path d="M13.23 1.651v2.056H.266V1.65c0-.06.05-.11.11-.11h2.697v.585a.498.498 0 10.996 0V1.54H6.45v.585a.498.498 0 10.996 0V1.54h2.38v.585a.498.498 0 10.997 0V1.54h2.296c.06 0 .11.05.11.11zM11.02 16.17l1.106-.805-.962-.556-.145 1.361zm2.21-7.467l-2.912 5.043a.498.498 0 00-.064.197l-.296 2.792H.376c-.06 0-.11-.05-.11-.11V4.702H13.23v3.999zm-5.605 5.005a.498.498 0 00-.498-.498H2.671a.498.498 0 000 .996h4.456a.498.498 0 00.498-.498zm2.03 0a.498.498 0 00-.497-.498h-.484a.498.498 0 000 .996h.484a.498.498 0 00.498-.498zm1.393-2.245a.498.498 0 00-.498-.498H2.671a.498.498 0 000 .996h7.88a.498.498 0 00.497-.498zm0-2.246a.498.498 0 00-.498-.498H2.671a.498.498 0 000 .996h7.88a.498.498 0 00.497-.498zm0-2.245a.498.498 0 00-.498-.498H2.671a.498.498 0 000 .996h7.88a.498.498 0 00.497-.498zm.381 6.84l1.427.825 2.702-4.68-1.426-.824-2.703 4.68zm5.136-6.278l-.84-.484a.34.34 0 00-.463.124l-.633 1.096 1.427.824.633-1.097a.34.34 0 00-.124-.463zM10.349.267a.498.498 0 00-.522.497v.777h.996V.778a.507.507 0 00-.474-.511zm-3.377 0a.498.498 0 00-.522.497v.777h.996V.778a.507.507 0 00-.474-.511zm-3.378 0a.498.498 0 00-.521.497v.777h.996V.778a.507.507 0 00-.475-.511z" fill="currentColor"/></g><defs><clipPath id="prefix__clip0_0_139"><path fill="#fff" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "Мои объявления",
          path: "/announcements",
        },
        {
          icon: '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_0_143)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"><path d="M1.063 2.125v3.611a.531.531 0 001.024.198A6.913 6.913 0 018.5 1.594 6.91 6.91 0 0115.406 8.5 6.91 6.91 0 018.5 15.406 6.91 6.91 0 011.594 8.5a.531.531 0 00-1.063 0A7.973 7.973 0 008.5 16.469 7.973 7.973 0 0016.469 8.5 7.973 7.973 0 008.5.531a7.958 7.958 0 00-6.375 3.19V2.124a.531.531 0 00-1.063 0z"/><path d="M8.5 2.656A5.847 5.847 0 002.656 8.5 5.847 5.847 0 008.5 14.344 5.847 5.847 0 0014.344 8.5 5.847 5.847 0 008.5 2.656zm2.234 7.328L9.03 8.28V4.25a.532.532 0 00-1.062 0V8.5c0 .14.056.276.156.376l1.86 1.859a.532.532 0 00.75-.751z"/></g><defs><clipPath id="prefix__clip0_0_143"><path fill="#fff" d="M0 0h17v17H0z"/></clipPath></defs></svg>',
          name: "История покупок",
          path: "/history",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.sidebar {
  position: relative;
  padding: rem(35);
  min-width: rem(285);
  width: rem(285);
  height: 100%;
  background: var(--background);
  border-radius: rem(14);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(35);

  &__logo {
    position: relative;
    padding-left: rem(45);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &::before {
      content: "";
      position: absolute;
      top: rem(-30);
      left: rem(-40);
      width: rem(100);
      height: rem(140);
      background-image: url('data:image/svg+xml,<svg width="84" height="128" viewBox="0 0 84 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.9266 30.6619L53.1913 41.9266L41.9266 53.1913L30.6619 41.9266L41.9266 30.6619Z" stroke="%235FD8DF" stroke-opacity="0.1" stroke-width="2.35029"/><rect x="40.5171" y="62.504" width="3.141" height="64.914" rx="1.5705" fill="url(%23paint0_linear_0_60)"/><g filter="url(%23filter0_di_0_60)"><path d="M41.0954 35.7068C41.5543 35.2479 42.2984 35.2479 42.7573 35.7068L48.1463 41.0958C48.6052 41.5547 48.6052 42.2987 48.1463 42.7577L42.7573 48.1466C42.2984 48.6056 41.5543 48.6056 41.0954 48.1466L35.7064 42.7577C35.2475 42.2987 35.2475 41.5547 35.7064 41.0958L41.0954 35.7068Z" fill="%235FD8DF"/></g><defs><filter id="filter0_di_0_60" x="0.107986" y="0.108353" width="83.6366" height="83.6368" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="17.6272"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.372549 0 0 0 0 0.847059 0 0 0 0 0.87451 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_60"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_60" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="1.17514"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.916667 0 0 0 0 0.995443 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_60"/></filter><linearGradient id="paint0_linear_0_60" x1="40.5171" y1="56.9255" x2="40.5171" y2="114.739" gradientUnits="userSpaceOnUse"><stop stop-color="%235FD8DF"/><stop offset="1" stop-color="%235FD8DF" stop-opacity="0"/></linearGradient></defs></svg>');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none;
    }

    &-title {
      font-weight: 700;
      font-size: rem(20);
    }

    &-desc {
      font-weight: 500;
      font-size: rem(12);
      line-height: 183%;
      color: #3f4450;
    }
  }

  &__menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(18);

    &-item {
      padding: rem(15) rem(24);
      height: rem(47);
      width: 100%;
      color: #545b6c;
      border-radius: rem(7);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);

      &.router-link-exact-active,
      &:hover {
        color: var(--primary);
        background: linear-gradient(
          90deg,
          rgba(95, 216, 223, 0.22) 0%,
          rgba(95, 216, 223, 0) 100%
        );
      }
    }

    &-item * {
      transition: color var(--transition-ease);
    }

    &-seperator {
      margin: rem(18) auto;
      height: rem(1);
      width: rem(182);
      background: rgba(156, 157, 159, 0.15);
    }

    span {
      min-width: rem(18);
      width: rem(18);
      height: rem(18);

      &:last-child {
        font-size: rem(14);
        font-weight: 500;
        white-space: nowrap;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
