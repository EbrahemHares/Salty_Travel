import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./newsletter.scss"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const Newsletter = () => {
  return (
    <div className="newsletter marginY" id="Blog">

    <div className="Salty__Newsletter ">
        <div className="Salty__Newsletter-textzone">
            <h2 className="heading">Sign up to our newsletter</h2>
            <p className="desc">Reciev latest news, update, and many other things every week. </p>
            <div className="input">
                <div className="input-container">
                    <input type="email" className="input-field" placeholder="Enter your email address" />
                    <div className="input-field-shadow"></div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit-btn">
                    <FontAwesomeIcon icon={faPaperPlane} color="#FFF" size="xs" />
                    </button>
                    
                    
                </div>
            </div>
        </div>
        </div>
        <svg width="1170" height="400" viewBox="0 0 1170 358" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
                <path d="M91.487 0C91.9225 1.80453 92.4455 3.6061 93.0539 5.40129C100.152 26.3456 118.954 46.5642 146.73 60.3437C202.216 87.8701 293.264 89.5173 396.159 19.7583C405.969 13.1074 415.817 6.51043 425.673 0H431.123C420.015 7.31067 408.907 14.7399 397.842 22.2414C294.237 92.4824 202.035 91.1296 145.396 63.0311C117.11 48.9982 97.6297 28.2481 90.2127 6.36427C89.4962 4.25033 88.8929 2.12715 88.4054 0H91.487Z" fill="#FAF8ED"/>
                <path d="M111.499 358C108.61 342.468 103.49 326.248 96.3101 309.594C77.3476 265.607 44.0867 218.752 0 173.852V169.58C45.3585 215.35 79.6222 263.305 99.065 308.406C106.396 325.413 111.63 342.036 114.55 358H111.499Z" fill="#FAF8ED"/>
                <path d="M503.165 358C493.35 280.972 453.388 221.854 398.394 183.67C334.753 139.481 250.927 123.297 170.304 139.969C150.12 144.143 136.96 149.55 129.419 156.002C125.674 159.206 123.345 162.641 122.197 166.294C121.048 169.948 121.044 173.931 122.128 178.286C124.311 187.061 130.862 197.167 140.91 208.605C150.929 220.01 164.285 232.588 179.866 246.312C192.161 257.141 205.833 268.673 220.31 280.884C247.922 304.174 278.462 329.936 307.966 358H303.609C274.967 330.922 245.409 305.988 218.537 283.318C204.012 271.065 190.271 259.473 177.884 248.563C162.277 234.818 148.805 222.138 138.656 210.585C128.536 199.064 121.58 188.51 119.216 179.011C118.026 174.229 117.989 169.672 119.335 165.394C120.681 161.114 123.375 157.224 127.468 153.723C135.602 146.763 149.38 141.232 169.696 137.031C251.073 120.203 335.747 136.519 400.106 181.205C455.875 219.928 496.349 279.931 506.189 358H503.165Z" fill="#FAF8ED"/>
                <path d="M972.461 358C976.304 355.416 980.363 352.717 984.619 349.887C988.636 347.216 992.828 344.429 997.179 341.512C1018.85 326.983 1044.57 309.17 1072.55 286.338C1100.41 263.607 1113.68 241.309 1116.99 221.572C1120.29 201.872 1113.71 184.506 1101.4 171.467C1076.68 145.298 1028.97 136.672 992.359 162.23C954.674 188.533 892.191 195.981 844.223 170.006C842.328 168.98 840.455 167.901 838.607 166.77C812.998 241.972 768.766 308.118 720.856 358H716.685C765.296 307.959 810.246 241.151 835.997 165.124C815.575 151.883 798.467 131.939 788.087 104.078C778.037 77.105 774.313 42.775 779.905 0H782.931C777.314 42.5866 781.026 76.5341 790.898 103.031C800.938 129.978 817.373 149.285 836.982 162.185C853.792 111.423 862.008 56.6194 857.047 0H860.062C865.04 57.2461 856.655 112.616 839.59 163.851C841.581 165.087 843.603 166.259 845.652 167.368C892.559 192.768 953.826 185.466 990.641 159.77C1028.53 133.328 1077.88 142.201 1103.58 169.407C1116.47 183.056 1123.42 201.346 1119.95 222.068C1116.48 242.753 1102.66 265.643 1074.45 288.662C1046.36 311.58 1020.55 329.454 998.85 344.004C994.456 346.949 990.236 349.756 986.202 352.438C983.321 354.353 980.536 356.206 977.851 358H972.461Z" fill="#FAF8ED"/>
                <path d="M985.412 0C999.87 7.4466 1012.19 11.8844 1022.9 14.6004C1037.01 18.1798 1048.29 18.7775 1058.15 19.3001L1058.15 19.3001C1061.59 19.4825 1064.86 19.6558 1068.01 19.9434C1074.08 20.4969 1079.72 21.4819 1085.21 23.8436C1090.71 26.211 1095.98 29.9266 1101.39 35.8393C1112.14 47.6063 1123.51 68.1696 1138.39 104.43C1148.79 129.771 1159.58 150.661 1170 168.372V174.23C1158.72 155.487 1146.91 133.113 1135.61 105.569C1120.74 69.33 1109.54 49.2059 1099.17 37.8634C1094.02 32.2214 1089.08 28.7768 1084.02 26.5993C1078.95 24.416 1073.67 23.4714 1067.74 22.931C1064.74 22.6577 1061.57 22.4899 1058.19 22.3111C1048.28 21.7864 1036.59 21.1671 1022.16 17.5083C1009.98 14.418 995.832 9.1656 979.007 0H985.412Z" fill="#FAF8ED"/>
            </g>
        </svg>

    </div>
  )
}

export default Newsletter