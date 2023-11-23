import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export const Logo = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M22 16v-4c0-2.828 0-4.243-.879-5.121c-.825-.826-2.123-.876-4.621-.879v16c2.498-.003 3.796-.053 4.621-.879c.879-.878.879-2.293.879-5.12Zm-3-5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
        clipRule="evenodd"
      ></path>
      <path d="M15.57 3.488L13.415 6H15v16H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16.001v-4c0-2.83 0-4.244.879-5.122C3.757 6 5.172 6 8 6h2.584L8.43 3.488a.75.75 0 0 1 1.138-.976L12 5.348l2.43-2.836a.75.75 0 0 1 1.14.976Z"></path>
    </g>
  </svg>
);

export const Google = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

export const Discord = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
      fill="currentColor"
    />
  </svg>
);

export const Twitter = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
      fill="currentColor"
    />
  </svg>
);

export const Github = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const Mail = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    fill="none"
    height={size || height}
    width={size || width}
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);

export const AtSign = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
);

export const Password = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    fill="none"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      d="m17.0108 14.6013c.414 0 .75-.336.75-.75v-1.852c0-.414-.336-.75-.75-.75h-5.692c-.324-1.067-1.306-1.85103-2.47804-1.85103-1.434 0-2.601 1.16703-2.601 2.60103 0 1.435 1.167 2.602 2.601 2.602 1.17204 0 2.15404-.784 2.47804-1.852h2.112v1.102c0 .414.336.75.75.75s.75-.336.75-.75v-1.102h1.33v1.102c0 .414.336.75.75.75zm-9.34504-12.60203h8.66904c3.388 0 5.665 2.378 5.665 5.917v8.16703c0 3.539-2.277 5.916-5.666 5.916h-8.66804c-3.389 0-5.666-2.377-5.666-5.916v-8.16703c0-3.539 2.277-5.917 5.666-5.917zm.0731 10.00093c0-.608.495-1.102 1.102-1.102s1.102.494 1.102 1.102c0 .607-.495 1.101-1.102 1.101s-1.102-.494-1.102-1.101z"
      fill="currentColor"
    />
  </svg>
);

export const EyeSlash = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    width={size || width}
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
      fill="currentColor"
    />
    <path
      d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
      fill="currentColor"
    />
  </svg>
);

export const Eye = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    width={size || width}
    role="presentation"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
  </svg>
);

export const Profile = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clip-rule="evenodd"
      d="m17.294 7.29117c0 2.93703-2.3549 5.29203-5.294 5.29203-2.9381 0-5.29399-2.355-5.29399-5.29203 0-2.93702 2.35589-5.29105 5.29399-5.29105 2.9391 0 5.294 2.35403 5.294 5.29105zm-5.294 14.70893c-4.33763 0-8-.705-8-3.425 0-2.721 3.68538-3.401 8-3.401 4.3386 0 8 .705 8 3.425 0 2.721-3.6854 3.401-8 3.401z"
      fill="currentColor"
    />
  </svg>
);

export const Settings = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    fill="none"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clip-rule="evenodd"
      d="m20.4023 13.5802c.3577.19.6337.49.8278.79.3782.62.3475 1.38-.0204 2.05l-.7154 1.2c-.3781.64-1.0833 1.04-1.8088 1.04-.3577 0-.7563-.1-1.0833-.3-.2657-.17-.5723-.23-.8993-.23-1.0118 0-1.86.83-1.8907 1.82 0 1.15-.9402 2.05-2.1154 2.05h-1.3899c-1.1854 0-2.12565-.9-2.12565-2.05-.02044-.99-.86866-1.82-1.8804-1.82-.33724 0-.64383.06-.89932.23-.32703.2-.73581.3-1.08328.3-.7358 0-1.44096-.4-1.81908-1.04l-.70515-1.2c-.37812-.65-.39856-1.43-.02044-2.05.16351-.3.4701-.6.81757-.79.28614-.14.4701-.37.64383-.64.51098-.86.20439-1.99-.66427-2.5-1.01174-.56996-1.33877-1.83996-.75625-2.82996l.68471-1.18c.59274-.99 1.85996-1.34 2.88192-.76.8891.48 2.04391.16 2.56511-.69.16352-.28.25549-.58.23505-.88-.02044-.39.09198-.76.28615-1.06.37813-.62 1.0628-1.02 1.8089-1.04h1.4409c.7563 0 1.441.42 1.8191 1.04.184.3.3066.67.2759 1.06-.0204.3.0716.6.2351.88.5212.85 1.676 1.17 2.5753.69 1.0118-.58 2.2892-.23 2.8717.76l.6847 1.18c.5928.99.2657 2.26-.7562 2.82996-.8687.51-1.1753 1.64-.6541 2.5.1635.27.3475.5.6336.64zm-11.29258-1.57c0 1.57 1.29788 2.82 2.90238 2.82 1.6044 0 2.8717-1.25 2.8717-2.82s-1.2673-2.82996-2.8717-2.82996c-1.6045 0-2.90238 1.25996-2.90238 2.82996z"
      fill="currentColor"
    />
  </svg>
);

export const LogOut = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clip-rule="evenodd"
      d="m9.89535 11.2301c-.4375 0-.78343.34-.78343.77 0 .42.34593.77.78343.77h6.10465v4.78c0 2.45-2.0247 4.45-4.5276 4.45h-4.95496c-2.49273 0-4.51744-1.99-4.51744-4.44v-11.10998c0-2.46 2.03488-4.45 4.52762-4.45h4.96508c2.4826 0 4.5073 1.99 4.5073 4.44v4.78998zm9.73485-2.68978 2.92 2.90998c.15.15.23.34.23.55 0 .2-.08.4-.23.54l-2.92 2.91c-.15.15-.35.23-.54.23-.2 0-.4-.08-.55-.23-.3-.3-.3-.79 0-1.09l1.6-1.59h-4.14v-1.54h4.14l-1.6-1.58998c-.3-.3-.3-.79 0-1.09.3-.31.79-.31 1.09-.01z"
      fill="currentColor"
    />
  </svg>
);

export const Download = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m8 17 4 4 4-4" />
  </svg>
);

export const Globe = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const Home = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3394 7.65929C21.0094 8.17829 21.4204 8.94929 21.4904 9.78829L21.5004 9.98929V18.0983C21.5004 20.1883 19.8494 21.8883 17.7804 21.9983H15.7904C14.8394 21.9793 14.0704 21.2393 14.0004 20.3093L13.9904 20.1683V17.3093C13.9904 16.9983 13.7594 16.7393 13.4504 16.6883L13.3604 16.6783H10.6894C10.3704 16.6883 10.1104 16.9183 10.0704 17.2183L10.0604 17.3093V20.1593C10.0604 20.2183 10.0494 20.2883 10.0404 20.3383L10.0304 20.3593L10.0194 20.4283C9.9004 21.2793 9.2004 21.9283 8.3304 21.9893L8.2004 21.9983H6.4104C4.3204 21.9983 2.6104 20.3593 2.5004 18.2983V9.98929C2.5094 9.13829 2.8804 8.34829 3.5004 7.79829L9.7304 2.78829C11.0004 1.77929 12.7804 1.73929 14.0894 2.66829L14.2504 2.78829L20.3394 7.65929ZM20.0994 18.2583L20.1104 18.0983V9.99829C20.0994 9.56929 19.9204 9.16829 19.6104 8.86929L19.4804 8.75829L13.3804 3.87829C12.6204 3.26829 11.5404 3.23929 10.7404 3.76829L10.5894 3.87829L4.5094 8.77929C4.1604 9.03829 3.9504 9.42829 3.9004 9.83829L3.8894 9.99829V18.0983C3.8894 19.4283 4.9294 20.5183 6.2504 20.5983H8.2004C8.4204 20.5983 8.6104 20.4493 8.6394 20.2393L8.6604 20.0593L8.6704 20.0083V17.3093C8.6704 16.2393 9.4904 15.3693 10.5404 15.2883H13.3604C14.4294 15.2883 15.2994 16.1093 15.3804 17.1593V20.1683C15.3804 20.3783 15.5304 20.5593 15.7304 20.5983H17.5894C18.9294 20.5983 20.0194 19.5693 20.0994 18.2583Z"
      fill="currentColor"
    />
  </svg>
);

export const Trending = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M7.50043 15.2499C7.31043 15.2499 7.12043 15.1799 6.97043 15.0299C6.68043 14.7399 6.68043 14.2599 6.97043 13.9699L10.1704 10.7699C10.3304 10.6099 10.5404 10.5299 10.7704 10.5499C10.9904 10.5699 11.1904 10.6899 11.3204 10.8799L12.4104 12.5199L15.9604 8.96994C16.2504 8.67994 16.7304 8.67994 17.0204 8.96994C17.3104 9.25994 17.3104 9.73994 17.0204 10.0299L12.8204 14.2299C12.6604 14.3899 12.4504 14.4699 12.2204 14.4499C12.0004 14.4299 11.8004 14.3099 11.6704 14.1199L10.5804 12.4799L8.03043 15.0299C7.88043 15.1799 7.69043 15.2499 7.50043 15.2499Z"
        fill="currentColor"
      />
      <path
        d="M16.5 12.25C16.09 12.25 15.75 11.91 15.75 11.5V10.25H14.5C14.09 10.25 13.75 9.91 13.75 9.5C13.75 9.09 14.09 8.75 14.5 8.75H16.5C16.91 8.75 17.25 9.09 17.25 9.5V11.5C17.25 11.91 16.91 12.25 16.5 12.25Z"
        fill="currentColor"
      />
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const Discover = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M4.90926 22.8207C3.81926 22.8207 2.88926 22.4707 2.20926 21.7907C1.23926 20.8207 0.939261 19.3407 1.36926 17.6207L3.84926 7.69075C4.27926 5.97075 5.95926 4.30075 7.66926 3.87075L17.5993 1.39075C19.3193 0.960746 20.7993 1.26075 21.7693 2.23075C22.7393 3.20075 23.0393 4.68075 22.6093 6.40075L20.1293 16.3307C19.6993 18.0507 18.0193 19.7207 16.3093 20.1507L6.37926 22.6307C5.86926 22.7507 5.37926 22.8207 4.90926 22.8207ZM17.9793 2.83075L8.04926 5.32075C6.87926 5.61075 5.60926 6.88075 5.30926 8.05075L2.82926 17.9807C2.52926 19.1707 2.68926 20.1407 3.26926 20.7307C3.84926 21.3107 4.82926 21.4707 6.01926 21.1707L15.9493 18.6907C17.1193 18.4007 18.3893 17.1207 18.6793 15.9607L21.1593 6.03075C21.4593 4.84075 21.2993 3.87075 20.7193 3.28075C20.1393 2.69075 19.1693 2.54075 17.9793 2.83075Z"
        fill="currentColor"
      />
      <path
        d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const TwoUser = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.0201 10.9134C17.8411 10.9134 19.3171 9.4374 19.3171 7.6164C19.3171 5.7964 17.8411 4.3194 16.0201 4.3194"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5363 14.4964C18.0803 14.5334 18.6203 14.6114 19.1533 14.7294C19.8923 14.8764 20.7823 15.1794 21.0983 15.8424C21.3003 16.2674 21.3003 16.7624 21.0983 17.1874C20.7833 17.8504 19.8923 18.1534 19.1533 18.3054"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.59143 15.2063C13.2814 15.2063 16.4334 15.7653 16.4334 17.9983C16.4334 20.2323 13.3014 20.8103 9.59143 20.8103C5.90143 20.8103 2.75043 20.2523 2.75043 18.0183C2.75043 15.7843 5.88143 15.2063 9.59143 15.2063Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5914 12.0188C7.1574 12.0188 5.2074 10.0678 5.2074 7.63379C5.2074 5.20079 7.1574 3.24979 9.5914 3.24979C12.0254 3.24979 13.9764 5.20079 13.9764 7.63379C13.9764 10.0678 12.0254 12.0188 9.5914 12.0188Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Category = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2855 2H19.5521C20.9036 2 22 3.1059 22 4.47018V7.7641C22 9.12735 20.9036 10.2343 19.5521 10.2343H16.2855C14.933 10.2343 13.8366 9.12735 13.8366 7.7641V4.47018C13.8366 3.1059 14.933 2 16.2855 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44892 13.7657H7.71449C9.06703 13.7657 10.1634 14.8716 10.1634 16.2369V19.5298C10.1634 20.8941 9.06703 22 7.71449 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2855 13.7657H19.5521C20.9036 13.7657 22 14.8716 22 16.2369V19.5298C22 20.8941 20.9036 22 19.5521 22H16.2855C14.933 22 13.8366 20.8941 13.8366 19.5298V16.2369C13.8366 14.8716 14.933 13.7657 16.2855 13.7657Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const History = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.5 12A7.5 7.5 0 0 0 6.9 6.5h1.35a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.042a9 9 0 1 1-2.895 5.331a.749.749 0 0 1 .752-.623c.46 0 .791.438.724.892A7.5 7.5 0 1 0 19.5 12Zm-7-4.25a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H12.5V7.75Z"
    />
  </svg>
);

export const Settings2 = ({
  size = 24,
  width,
  height,
  ...props
}: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(2.5 1.5)">
      <path
        d="M17.528,5.346l-.622-1.08a1.913,1.913,0,0,0-2.609-.7h0a1.9,1.9,0,0,1-2.609-.677,1.831,1.831,0,0,1-.256-.915h0A1.913,1.913,0,0,0,9.519,0H8.265a1.9,1.9,0,0,0-1.9,1.913h0A1.913,1.913,0,0,1,4.448,3.8a1.831,1.831,0,0,1-.915-.256h0a1.913,1.913,0,0,0-2.609.7l-.668,1.1a1.913,1.913,0,0,0,.7,2.609h0a1.913,1.913,0,0,1,.957,1.657,1.913,1.913,0,0,1-.957,1.657h0a1.9,1.9,0,0,0-.7,2.6h0l.632,1.089A1.913,1.913,0,0,0,3.5,15.7h0a1.895,1.895,0,0,1,2.6.7,1.831,1.831,0,0,1,.256.915h0a1.913,1.913,0,0,0,1.913,1.913H9.519a1.913,1.913,0,0,0,1.913-1.9h0a1.9,1.9,0,0,1,1.913-1.913,1.95,1.95,0,0,1,.915.256h0a1.913,1.913,0,0,0,2.609-.7h0l.659-1.1a1.9,1.9,0,0,0-.7-2.609h0a1.9,1.9,0,0,1-.7-2.609,1.876,1.876,0,0,1,.7-.7h0a1.913,1.913,0,0,0,.7-2.6h0Z"
        transform="translate(0.779 0.778)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <circle
        cx="2.636"
        cy="2.636"
        r="2.636"
        transform="translate(7.039 7.753)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export const Search = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(2 2)"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    >
      <circle
        cx={8.989}
        cy={8.989}
        r={8.989}
        transform="translate(.778 .778)"
      />
      <path d="M16.018 16.485L19.542 20" />
    </g>
  </svg>
);

export const Movie = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 44H44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const Anime = ({ size = 24, width, height, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        fill="currentColor"
        d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415L16.414 6H18.5A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"
      />
    </g>
  </svg>
);

export const Television = ({
  size = 24,
  width,
  height,
  ...props
}: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        fill="currentColor"
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v8.5A2.75 2.75 0 0 0 4.75 18h14.5A2.75 2.75 0 0 0 22 15.25v-8.5A2.75 2.75 0 0 0 19.25 4H4.75ZM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-8.5ZM5.75 19.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H5.75Z"
      />
    </g>
  </svg>
);
