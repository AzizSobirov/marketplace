<template>
  <div class="content">
    <form class="wrapper" @submit.prevent="handleSubmit">
      <div class="col">
        <div class="group">
          <div class="item">
            <div class="subtitle">Стандартная обложка</div>
            <FileUpload @change="fileChange" />
          </div>
          <div class="item">
            <div class="subtitle">Собственная обложка</div>
            <FileUpload @change="fileChange" />
          </div>
        </div>

        <div class="item">
          <div class="subtitle">Загруженные фотографии</div>
          <div class="files">
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
          </div>
        </div>

        <div class="group secondary">
          <div
            class="btn"
            :class="{ 'btn-primary': type === 'hour' }"
            @click="type = 'hour'"
          >
            <span>Почасовой</span>
          </div>
          <div
            class="btn"
            :class="{ 'btn-primary': type === 'day' }"
            @click="type = 'day'"
          >
            <span>Посуточный</span>
          </div>
        </div>

        <div class="item">
          <div class="title">Описание</div>
          <div class="textarea">
            <textarea placeholder="Введите текст..." required></textarea>
          </div>
        </div>

        <div class="item">
          <div class="title">Стоимость продажи</div>

          <div class="input">
            <input type="text" placeholder="Введите текст..." required />
            <span>Мин. стоимость по рынку: $ 5,000,000</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="title">Предпросмотр объявления</div>

        <div class="product">
          <div class="product__favourite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
            </svg>
          </div>

          <div class="product__img">
            <img src="@/assets/img/products/2.png" alt="" />
          </div>

          <div class="product__info">
            <div class="product__info-category">Категория товара</div>
            <div class="product__info-title">Хранилище данных - 16 ТБ</div>
          </div>

          <div class="product__info">
            <div class="product__info-category">Государственный номер</div>
            <div class="product__info-subtitle">XXX XXX</div>
          </div>

          <div class="product__info">
            <div class="product__info-category">Тюнинг</div>
            <div class="product__info-subtitle">Частичный</div>
          </div>

          <div class="product__info">
            <div class="product__info-category">Государственная цена</div>
            <div class="product__info-subtitle">$ 10,000,000,000 $</div>
          </div>

          <div class="product__additional">
            <div class="product__distance">
              <div class="product__distance-icon">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3286 9.94739L9.45531 1.24738H12.8945C13.0177 1.25081 13.1372 1.19483 13.2288 1.09083C13.3205 0.986829 13.3774 0.842615 13.3879 0.687514C13.3922 0.605498 13.3831 0.523239 13.3612 0.445845C13.3393 0.368451 13.305 0.297576 13.2606 0.237622C13.2161 0.177668 13.1623 0.129915 13.1026 0.0973298C13.0429 0.0647446 12.9785 0.0480232 12.9135 0.0482038H0.595783C0.473158 0.0457381 0.354356 0.102148 0.263346 0.206053C0.172336 0.309958 0.115891 0.453625 0.105399 0.608068C0.10109 0.690084 0.110169 0.772343 0.132072 0.849737C0.153975 0.927131 0.188234 0.998006 0.23272 1.05796C0.277207 1.11791 0.330971 1.16567 0.390674 1.19825C0.450376 1.23084 0.514742 1.24756 0.579773 1.24738H4.03796L0.164695 9.94739C0.114975 10.0591 0.0948841 10.188 0.10737 10.3152C0.119856 10.4424 0.164261 10.5612 0.234073 10.6542C0.280276 10.7141 0.335639 10.7616 0.396799 10.7936C0.457959 10.8257 0.52364 10.8418 0.589853 10.8408H6.03508C6.09798 10.8408 6.15831 10.8092 6.20279 10.753C6.24727 10.6967 6.27226 10.6205 6.27226 10.541V9.06225C6.27061 8.90751 6.31538 8.75772 6.39756 8.64301C6.47973 8.5283 6.59323 8.45717 6.71521 8.44392C6.7801 8.43848 6.84518 8.44995 6.90641 8.47764C6.96764 8.50532 7.02372 8.54862 7.07115 8.60485C7.11858 8.66108 7.15636 8.72904 7.18214 8.8045C7.20792 8.87996 7.22115 8.96132 7.22101 9.04351V10.5425C7.22101 10.622 7.246 10.6982 7.29048 10.7545C7.33496 10.8107 7.39529 10.8423 7.4582 10.8423H12.8999C12.9661 10.8433 13.0318 10.8272 13.0929 10.7951C13.1541 10.7631 13.2094 10.7156 13.2556 10.6557C13.3263 10.5631 13.3715 10.4443 13.3846 10.3167C13.3978 10.1892 13.3781 10.0597 13.3286 9.94739ZM7.22101 6.34387C7.22101 6.50289 7.17103 6.6554 7.08207 6.76784C6.99311 6.88029 6.87245 6.94346 6.74664 6.94346C6.62082 6.94346 6.50017 6.88029 6.4112 6.76784C6.32224 6.6554 6.27226 6.50289 6.27226 6.34387V5.1447C6.27226 4.98567 6.32224 4.83317 6.4112 4.72072C6.50017 4.60828 6.62082 4.54511 6.74664 4.54511C6.87245 4.54511 6.99311 4.60828 7.08207 4.72072C7.17103 4.83317 7.22101 4.98567 7.22101 5.1447V6.34387ZM7.22101 2.44655C7.22101 2.60557 7.17103 2.75808 7.08207 2.87052C6.99311 2.98297 6.87245 3.04614 6.74664 3.04614C6.62082 3.04614 6.50017 2.98297 6.4112 2.87052C6.32224 2.75808 6.27226 2.60557 6.27226 2.44655V1.84697C6.27226 1.68794 6.32224 1.53544 6.4112 1.42299C6.50017 1.31055 6.62082 1.24738 6.74664 1.24738C6.87245 1.24738 6.99311 1.31055 7.08207 1.42299C7.17103 1.53544 7.22101 1.68794 7.22101 1.84697V2.44655Z"
                    fill="#5D6374"
                  />
                </svg>
              </div>
              <div class="product__distance-value">10 000 км.</div>
            </div>
            <div class="product__weight">
              <div class="product__weight-icon">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.51482 4.72908C7.51482 5.35448 7.76326 5.95426 8.20548 6.39649C8.64771 6.83871 9.24749 7.08715 9.87289 7.08715C10.4983 7.08715 11.0981 6.83871 11.5403 6.39649C11.9825 5.95426 12.231 5.35448 12.231 4.72908C12.231 4.10368 11.9825 3.50389 11.5403 3.06167C11.0981 2.61944 10.4983 2.371 9.87289 2.371C9.24749 2.371 8.64771 2.61944 8.20548 3.06167C7.76326 3.50389 7.51482 4.10368 7.51482 4.72908Z"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.8131 7.08715H13.9327C14.1168 7.08712 14.2951 7.1517 14.4364 7.26963C14.5778 7.38757 14.6732 7.55137 14.7062 7.73247L15.9929 14.8067C16.0135 14.92 16.009 15.0364 15.9796 15.1478C15.9503 15.2591 15.8968 15.3626 15.823 15.451C15.7493 15.5395 15.6569 15.6106 15.5526 15.6594C15.4483 15.7082 15.3346 15.7334 15.2195 15.7334H4.52638C4.41123 15.7334 4.29748 15.7082 4.19318 15.6594C4.08888 15.6106 3.99658 15.5395 3.9228 15.451C3.84901 15.3626 3.79555 15.2591 3.7662 15.1478C3.73685 15.0364 3.73232 14.92 3.75293 14.8067L5.03965 7.73247C5.0726 7.55137 5.16807 7.38757 5.30942 7.26963C5.45076 7.1517 5.62902 7.08712 5.8131 7.08715Z"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__distance-value">123 кг.</div>
            </div>
          </div>

          <div class="product__btn"><span>Выгрузить со склада</span></div>
        </div>

        <div class="details">
          <div class="details__warn">
            <div class="details__warn-title">
              <div class="details__warn-icon">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4225 8.65613H11.4319M10.4792 11.4858H11.4225V15.2587H12.3657"
                    stroke="white"
                    stroke-width="1.88646"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>Информация</span>
            </div>
            <p class="details__warn-desc">
              Если предмет отсутствует у вас на вашем складе, Вы можете
              выставить лот на торговую площадку, приобретите этот товар
            </p>
          </div>

          <div class="details__list">
            <div class="details__item">
              <div class="details__item-icon">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66721 0.637512H4.33361V2.06608H8.66721V0.637512ZM11.578 5.2018L12.6036 4.18751C12.293 3.82323 11.9535 3.48037 11.5852 3.18037L10.5596 4.19465C9.40922 3.27917 7.97696 2.78015 6.50041 2.78037C2.91074 2.78037 0 5.65894 0 9.20894C0 12.7589 2.90352 15.6375 6.50041 15.6375C7.72415 15.6382 8.9232 15.297 9.95944 14.6532C10.9957 14.0094 11.827 13.0893 12.3576 11.9988C12.8882 10.9082 13.0965 9.69163 12.9586 8.48912C12.8207 7.28661 12.3421 6.14709 11.578 5.2018ZM6.50041 14.2089C3.70523 14.2089 1.44454 11.9732 1.44454 9.20894C1.44454 6.44465 3.70523 4.20894 6.50041 4.20894C9.29558 4.20894 11.5563 6.44465 11.5563 9.20894C11.5563 11.9732 9.29558 14.2089 6.50041 14.2089ZM6.26928 10.6375H2.4196C2.62428 11.2099 2.94975 11.7326 3.37439 12.171C3.79903 12.6094 4.31312 12.9535 4.88253 13.1804L4.80308 13.1375L6.26928 10.6375ZM10.5812 7.78037C10.3796 7.21588 10.0608 6.69933 9.64533 6.26388C9.22989 5.82842 8.72697 5.48369 8.16885 5.2518L6.6882 7.78037H10.5812ZM5.49646 13.3732C5.82148 13.4518 6.15372 13.4947 6.50041 13.4947C7.46825 13.4947 8.35664 13.1732 9.0789 12.6447L7.55492 9.85894L5.49646 13.3732ZM3.28632 6.34465C2.56612 7.12861 2.167 8.14975 2.1668 9.20894C2.1668 9.4518 2.19569 9.68751 2.23181 9.92323H5.64091L3.28632 6.34465ZM9.63505 12.1589C10.4062 11.3665 10.8361 10.3088 10.834 9.20894C10.834 8.96608 10.8051 8.73037 10.769 8.49465H7.63437L9.63505 12.1589ZM7.46103 5.03037C7.15045 4.96608 6.83265 4.92323 6.50041 4.92323C5.48923 4.92323 4.55751 5.27323 3.8208 5.84465L5.49646 8.38751L7.46103 5.03037Z"
                    fill="#5D6374"
                  />
                </svg>
              </div>

              <div class="details__item-title">Ускорение</div>
              <div class="details__item-value">56</div>
            </div>

            <div class="details__item">
              <div class="details__item-icon">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 8.50006C13 12.6423 11.5036 16.0001 9.65683 16.0001H4.08561C4.71178 15.5793 5.28161 14.8376 5.6745 13.9571C6.305 12.5411 6.68561 10.6121 6.68561 8.50006C6.68561 6.38881 6.305 4.45906 5.6745 3.04306C5.28089 2.16181 4.71106 1.42006 4.08489 1.00006H9.65611C11.5036 1.00006 13 4.35781 13 8.50006Z"
                    fill="#5D6374"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.946111 3.35056C0.368333 4.64956 0 6.46981 0 8.50006C0 10.5303 0.367611 12.3506 0.946111 13.6496C1.54122 14.9831 2.28583 15.6251 2.97122 15.6251C3.65733 15.6251 4.40194 14.9831 4.99633 13.6496C5.57556 12.3506 5.94244 10.5303 5.94244 8.50006C5.94244 6.46981 5.57556 4.64956 4.99633 3.35056C4.40194 2.01706 3.65733 1.37506 2.97122 1.37506C2.28511 1.37506 1.54122 2.01706 0.946111 3.35056ZM1.85683 8.50006C1.85683 10.9856 2.35589 13.0001 2.97122 13.0001C3.53961 13.0001 4.00833 11.2826 4.07694 9.06256H3.34389C3.27169 9.06375 3.19997 9.05013 3.13284 9.02249C3.06571 8.99485 3.0045 8.95372 2.9527 8.90147C2.90091 8.84921 2.85955 8.78686 2.831 8.71798C2.80245 8.6491 2.78727 8.57504 2.78633 8.50006C2.78727 8.42508 2.80245 8.35102 2.831 8.28214C2.85955 8.21326 2.90091 8.15091 2.9527 8.09866C3.0045 8.0464 3.06571 8.00527 3.13284 7.97763C3.19997 7.94999 3.27169 7.93637 3.34389 7.93756H4.07767C4.00833 5.71756 3.53961 4.00006 2.97194 4.00006C2.35517 4.00006 1.85683 6.01456 1.85683 8.50006Z"
                    fill="#5D6374"
                  />
                </svg>
              </div>

              <div class="details__item-title">Сцепление</div>
              <div class="details__item-value">56</div>
            </div>

            <div class="details__item">
              <div class="details__item-icon">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20045 4.04694C7.20045 4.43658 6.88978 4.75006 6.50363 4.75006C6.11748 4.75006 5.80681 4.43658 5.80681 4.04694V1.70319C5.80681 1.315 6.11748 1.00006 6.50363 1.00006C6.88978 1.00006 7.20045 1.315 7.20045 1.70319V4.04694ZM4.46544 5.68756H8.54182C9.49704 5.68756 10.3971 6.31158 10.7281 7.24323L11.5497 9.56647C12.1333 9.81549 12.5427 10.3985 12.5427 11.0782V15.0626C12.5427 15.5811 12.1275 16.0001 11.6136 16.0001H11.1491C10.6352 16.0001 10.22 15.5811 10.22 15.0626V14.1251H2.78727V15.0626C2.78727 15.5811 2.37121 16.0001 1.85818 16.0001H1.39363C0.880603 16.0001 0.464545 15.5811 0.464545 15.0626V11.0782C0.464545 10.3985 0.873344 9.81549 1.45635 9.56647L2.27888 7.24323C2.609 6.31158 3.48409 5.68756 4.46544 5.68756ZM4.46544 7.56256C4.27091 7.56256 4.0938 7.68854 4.02993 7.87311L3.47538 9.43756H9.53188L8.97733 7.87311C8.88733 7.68854 8.73635 7.56256 8.54182 7.56256H4.46544ZM2.78727 12.4844C3.17342 12.4844 3.48409 12.171 3.48409 11.7813C3.48409 11.3917 3.17342 11.0782 2.78727 11.0782C2.40257 11.0782 2.09045 11.3917 2.09045 11.7813C2.09045 12.171 2.40257 12.4844 2.78727 12.4844ZM10.22 11.0782C9.83383 11.0782 9.52317 11.3917 9.52317 11.7813C9.52317 12.171 9.83383 12.4844 10.22 12.4844C10.6061 12.4844 10.9168 12.171 10.9168 11.7813C10.9168 11.3917 10.6061 11.0782 10.22 11.0782ZM0.20408 2.14352C0.476159 1.86901 0.917476 1.86901 1.18953 2.14352L2.58316 3.54977C2.85521 3.82428 2.85521 4.26959 2.58316 4.51862C2.31111 4.81744 1.86979 4.81744 1.59774 4.51862L0.20408 3.13785C-0.0680268 2.86334 -0.0680268 2.41803 0.20408 2.14352ZM11.8169 2.14352C12.0898 1.86901 12.5311 1.86901 12.7779 2.14352C13.074 2.41803 13.074 2.86334 12.7779 3.13785L11.3843 4.51862C11.1375 4.81744 10.6961 4.81744 10.4232 4.51862C10.1532 4.26959 10.1532 3.82428 10.4232 3.54977L11.8169 2.14352Z"
                    fill="#5D6374"
                  />
                </svg>
              </div>

              <div class="details__item-title">Управляемость</div>
              <div class="details__item-value">56</div>
            </div>

            <div class="details__item">
              <div class="details__item-icon">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9456 5.12324L11.1448 6.39814C11.531 7.21344 11.7201 8.11741 11.6951 9.02907C11.6701 9.94072 11.4318 10.8316 11.0016 11.6218H1.97789C1.41874 10.595 1.18704 9.40492 1.31715 8.22784C1.44726 7.05076 1.93225 5.94939 2.70023 5.08701C3.4682 4.22463 4.47827 3.64715 5.58069 3.44017C6.68311 3.23319 7.8192 3.40774 8.82054 3.93793L10.025 3.0903C8.79872 2.25797 7.34414 1.885 5.89395 2.03105C4.44375 2.1771 3.08173 2.83373 2.02574 3.8959C0.969746 4.95808 0.280807 6.36442 0.0691186 7.88999C-0.14257 9.41556 0.135223 10.9722 0.858063 12.3109C0.97168 12.5192 1.13482 12.6924 1.33127 12.8133C1.52773 12.9342 1.75065 12.9986 1.97789 13H10.9951C11.2245 13.001 11.4501 12.9378 11.6491 12.8168C11.848 12.6958 12.0132 12.5212 12.1279 12.3109C12.7278 11.211 13.0288 9.95702 12.9978 8.68741C12.9668 7.41781 12.6049 6.18197 11.9521 5.11635L11.9456 5.12324Z"
                    fill="#5D6374"
                  />
                  <path
                    d="M5.57174 9.83692C5.69268 9.96507 5.83629 10.0667 5.99436 10.1361C6.15244 10.2054 6.32188 10.2412 6.493 10.2412C6.66411 10.2412 6.83355 10.2054 6.99163 10.1361C7.1497 10.0667 7.29331 9.96507 7.41425 9.83692L11.0992 3.98617L5.57174 7.88667C5.45068 8.01468 5.35463 8.16668 5.28911 8.334C5.22358 8.50132 5.18985 8.68067 5.18985 8.8618C5.18985 9.04292 5.22358 9.22227 5.28911 9.38959C5.35463 9.55691 5.45068 9.70892 5.57174 9.83692Z"
                    fill="#5D6374"
                  />
                </svg>
              </div>

              <div class="details__item-title">Макс. скорость</div>
              <div class="details__item-value">56</div>
            </div>
          </div>

          <button type="submit" class="details__btn">
            <div class="details__btn-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.22375 3.01141V10.7822M3.33838 6.89679H11.1091"
                  stroke="currentColor"
                  stroke-width="1.11011"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span>Опубликовать объявление</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "CreateWarehouse",
  components: { FileUpload },
  data() {
    return {
      standard_cover: null,
      own_cover: null,
      files: [],
      description: null,
      price: null,
      type: "day",
    };
  },
  methods: {
    ...mapMutations(["addProductToAnnouncements"]),
    fileToURL(file) {
      if (!file) return null;
      return URL.createObjectURL(file);
    },
    fileChange(file, index) {
      const fileExist = this.files.find((f) => f.id === index);
      if (!fileExist) this.files.push({ id: index, file });
      this.files[index] = { id: index, file: this.fileToURL(file) };
    },

    handleSubmit() {
      this.addProductToAnnouncements({
        standard_cover: this.fileToURL(this.standard_cover),
        own_cover: this.fileToURL(this.own_cover),
        files: this.files,
        title: "something",
        description: this.description,
        price: this.price,
      });
      this.$router.push("/announcements");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.content {
  padding-bottom: rem(30);
  min-height: calc(100vh - rem(120));
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(40);

  &::-webkit-scrollbar {
    width: 0;
  }
}

.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: rem(60);
}

.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(26);

  &:nth-child(1) {
    width: rem(800);
  }
  &:nth-child(2) {
    width: rem(460);
    gap: rem(20);
  }
}

.title {
  font-weight: 700;
  font-size: rem(18);
  color: #fff;
}

.subtitle {
  font-weight: 500;
  font-size: rem(14);
  color: #505564;
}

.group {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(32);

  &.secondary {
    gap: rem(10);
  }
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);
}

.files {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: rem(14);
}

.textarea {
  padding: rem(25);
  height: rem(185);
  width: 100%;
  background: rgba(5, 6, 9, 0.58);
  border-radius: rem(10);

  textarea {
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 500;
    font-size: rem(14);
    resize: none;

    &::placeholder {
      color: #3c3f49;
    }
  }
}

.input {
  padding: rem(12) rem(18) rem(12) rem(25);
  height: rem(64);
  width: 100%;
  background: rgba(5, 6, 9, 0.58);
  border-radius: rem(10);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  input {
    flex-grow: 1;
    font-weight: 500;
    font-size: rem(14);
    color: #fff;

    &::placeholder {
      color: #3c3f49;
    }
  }

  span {
    padding: rem(12);
    font-weight: 500;
    font-size: rem(14);
    color: #40a6ac;
    background: rgba(95, 216, 223, 0.08);
    border-radius: rem(6);
  }
}

.btn {
  height: rem(45);
  width: 100%;
  background: #12141a;
  border-radius: rem(6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-ease);
  cursor: pointer;

  &-primary {
    background: #40a6ac;

    span {
      color: #12141a;
    }
  }

  span {
    font-weight: 500;
    font-size: rem(12);
    color: #505564;
  }
}

.product {
  position: relative;
  padding: rem(20);
  width: 100%;
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(25);

  &__favourite {
    position: absolute;
    top: rem(20);
    right: rem(20);
    z-index: 2;
    width: rem(18);
    height: rem(18);
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      svg {
        color: #df5f61;

        path {
          fill: #df5f61;
        }
      }
    }
  }

  &__img {
    margin-top: rem(-20);
    margin-left: rem(-20);
    position: relative;
    width: calc(100% + rem(40));
    min-height: rem(185);
    height: rem(185);
    background: #15171e;
    border-radius: rem(10) rem(10) 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      min-height: rem(132);
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &-category {
      font-weight: 500;
      font-size: rem(14);
      color: #5d6374;
    }

    &-title {
      font-weight: 600;
      font-size: rem(16);
      color: #fff;
    }

    &-subtitle {
      font-weight: 500;
      font-size: rem(16);
      color: #fff;
    }
  }

  &__additional {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(25);
  }

  &__distance,
  &__weight {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &-icon {
      width: rem(18);
      height: rem(18);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-value {
      font-weight: 500;
      font-size: rem(14);
      color: #fff;
    }
  }

  &__btn {
    width: 100%;
    height: rem(54);
    border: rem(1) solid var(--primary);
    border-radius: rem(8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-ease);
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: rem(14);
      color: var(--primary);
      transition: var(--transition-ease);
    }

    &:hover {
      background: var(--primary);

      span {
        color: var(--background);
      }
    }
  }
}

.details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(25);

  &__warn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &-title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);

      span {
        font-weight: 500;
        font-size: rem(14);
        line-height: 191%;
        color: #fff;
      }
    }

    &-icon {
      width: rem(22);
      height: rem(22);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-desc {
      font-weight: 500;
      font-size: rem(14);
      line-height: 170%;
      color: #5d6374;
    }
  }

  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(22) rem(55);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &-icon {
      width: rem(15);
      height: rem(15);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-bottom: rem(2);
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      font-weight: 500;
      font-size: rem(12);
      line-height: 197%;
      color: #fff;
    }

    &-value {
      margin-left: auto;
      font-weight: 600;
      font-size: rem(12);
      line-height: 197%;
      color: #fff;
    }
  }

  &__btn {
    width: 100%;
    height: rem(48);
    color: #12141a;
    background: var(--primary);
    border-radius: rem(10);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(12);
    transition: var(--transition-ease);
    cursor: pointer;

    &-icon {
      width: rem(14);
      height: rem(14);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    span {
      font-weight: 500;
      font-size: rem(14);
    }
  }
}
</style>
