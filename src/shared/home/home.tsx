import Layout from "antd/lib/layout";
import Img from "gatsby-image";
import { PureComponent } from "react";
import React from "react";
import { configs } from "../../site-config";

export class Home extends PureComponent {
  // tslint:disable-next-line:max-func-body-length
  public render(): JSX.Element {
    const data = {
      headerIcon: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABQUlEQVQ4y+WUPYqDUBSF/YlECCESUKzFDYSQLgELEbIALWyDnUXAzjKtfcgKsoSQzgVIdpBWrNRWsTjDezAykzEZZ5JmGOGA7+r7OOf6vAzDMHix/jqQ4zjwPN/qKSCBddVZlv29Q13X4XkegiCAZVl9oPcdbLdb3F7n8xmj0egRtDvmer2mgOv1CsMwoGka9vs9rR2Px0ct6XZ3Op3o5uVy+el5GIbwff9nPRQEAWmaoizLNt5isYDrujBNkzoeDof9geTlLMuQ5znG4zGtHQ6Hto9N00BV1Xt97I4cxzHdPJ/P6Xo6nUJRFCRJgqqqIMtyP+D74bVtmwIvlwtmsxkkScJms6G1oigovBfwo3a73ZdjQxzWdd0/8q2IO/JloyjCarXCZDKB4zgQRfF1v97Tw2EwGFCRexLxmyHx3wbsG1YlBcC4jo2FAAAAAElFTkSuQmCC",
            aspectRatio: 1,
            src: "/images/icon.png",
            srcSet:
              "/images/icon.png 13w,\n/images/icon.png 25w,\n/images/icon.png 50w,\n/images/icon.png 75w,\n/images/icon.png 100w,\n/images/icon.png 150w,\n/images/icon.png 512w",
            sizes: "(max-width: 50px) 100vw, 50px"
          }
        }
      },
      appStore: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz52Ru6rCQBCGV4IJRrtYRDB4i2g0JFEEAypYWljbWUQQG8EqXYqAYCP4OOeAr5PXMPvrDAq25yz8u8Ow881NCCF+X4KiKPnrlWT/URSTv+0f8eWEbdv8Sdd1TKdTeJ6HbrfL9nA4RK/XQ7/f53+dToe1XC5Rq9XkVzEiNwwDl8tF3u93OZlMGDqfzxlEAN/3GU6+xWIB13XRaDRAcbPZTJqmybBCofAgoNxsNngdSdd6vWZgFEVc3WAwYLVaLdZ2u8VqtcJoNOJkjuNQEknwd+sib7fbMssyhu52O245TVPW6XTC9XrF8XhkyOFwQJIk2O/3iOOYJM/nM4IgoCofnxnCsixJc9I0DeVyGaVSCWEYYjwec6s0P1VVudpqtYpms8ltVyoV1Ot1WSwWP0sSt6/F/HfLn7jbEzOkyGQKk0s0AAAAAElFTkSuQmCC",
            width: 220,
            height: 75,
            src: "/images/appstore.png",
            srcSet:
              "/images/appstore.png 1x,\n/images/appstore.png 1.5x,\n/images/appstore.png 2x"
          }
        }
      },
      playStore: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABOElEQVQY021RTUrDUBCevLRpIIsIJdA7tJvYVaqlSWmLdFUISRFNgoFsXWSTRV249Qo9jAcQ9QLiHdy47HzmvcRS0MXHm59vZr6ZR0T0STqhfg+CiIVQNrqdDnq9HkzTVDAMQ0EIofKapinUNstaGavxQSoZJdx9SkFnkqxIWCwW2Gw2GI/H8DwP8/kcYRjCsiy0xUe0Q7j1a2V3D6Av8Or1hu/DhjSZeHBd91gk1ei6jsFgoPzRaIQgCJT6k2ZMmpRbPuLy+Ztfri/49oqgGxbiKEKapiiKAnmeI8sybLdb7Pd7JEmCOI6x2+0kuKoqlpu0qxOcVcj5eQBbTWlWHg6HmM1mmE6n8H0fy+USZVmqxvIEjuPAtm2s12s1sOa3KjXt3WjkHmq5rAv6c6Nf9Pv9/+Knn/L2A07EpZEmqJh/AAAAAElFTkSuQmCC",
            width: 255,
            height: 75,
            src: "/images/playstore.png",
            srcSet:
              "/images/playstore.png 1x,\n/images/playstore.png 1.5x,\n/images/playstore.png 2x"
          }
        }
      },
      iphoneScreen: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAArCAIAAAD3xz8iAAAACXBIWXMAAAsSAAALEgHS3X78AAADF0lEQVRIx+WVSU8iURSFiXFkbJpBUVFRRBETZw3aOIBMBoIhbEiMCxawEYwuhI1xxcqVG39vf/0ulgVWA0kvupM+i8qtV+++e965Q5m+/QFM/7Wz0+n8ruD8wFDO7LPZbBaLZWJiYmxsDGN8fHxqamqwM25LS0t3d3e1Wq1arZZKpf39/Xw+f3Fx4XA4hAj7NKPL2W63z8zMpNPpYrF4c3NTLpe3trYKhcLOzs7IyAjxITI5OTk6OorR42/ieI/HE4lEVldXw+Hw+vr67u4uRjwePz4+Jv7GxsbBwQGHbm9vm81mvb/JarUuLy8/Pj7e3t7CvNls3t/f1+v1RqPx8PDAytHR0cvLy/PzM2dBAf5dgsE8ogAL4nMLuIRCIa/XOz8/zysBiIk6BoIFAoF2u/329tZWeH9/r1QqEHl9fW21Wk9PT1DlXONUwYRQPp+PqxKN4ITl0Lm5ObfbPT093S/PnApzdgs3iwLr2HaFocpTlByyvP56Y3BnkmFTsCro7X53xhNJFxcXFxYWkBeDmsEgw6SQV/JsmKdObbMvlUolk8mTkxPqka6IRqOHh4dXV1eJRIKqFCLs7DnFpIkMJIjL5fL7/dDBAZujeYUXT8pBv79Dmx0wpBngvLm5ScC1tTVpmPPzc8r7hwL+xP901orE8QGNpHyy6WBAm/L0KkDBo6Avkj5T6ZdgkMlms8wDaGcyGQzqvE+GegVDGGkPlwIUtEkor7Khh0VHMBLLJKPdeTJMoMDK7OwsKwiGVKQQ2XrHkDZ0OVuLDOSz2PJVP0O61NaKUepRU9XRDeNJksvlrq+vqS2ee3t7otbX34ABbUmVcMaQoSNP+xcYCIY2KysrZ2dnDJ1YLEY9s0ipUfMiGJ9QEaNr9GqpIjIJx/ApsIi/TFK3ghi9tCFjVmAsM700Q/4VSChqGXSVVNilAl0JvdPTU+osqkDl0SH4G5cnhyFSMBik6Wgpbo74jF5WMPBEDtHvq+adO0tXoBZEiANhyTnGgNFLqjgebehqTtF3Uv8Z/OksfyaC/25iDXDm2n3G3b809H8C63n1F8z2i5cAAAAASUVORK5CYII=",
            aspectRatio: 0.4618226600985222,
            src: "/screenshot/yourscreenshot.png",
            srcSet:
              "/screenshot/yourscreenshot.png 88w,\n/images/screenshot/yourscreenshot.png 175w,\n/images/screenshot/yourscreenshot.png 350w,\n/images/screenshot/yourscreenshot.png 525w,\n/images/screenshot/yourscreenshot.png 700w,\n/images/screenshot/yourscreenshot.png 1050w,\n/images/screenshot/yourscreenshot.png 1125w",
            sizes: "(max-width: 350px) 100vw, 350px"
          }
        }
      },
      videoScreen: {
        publicURL: "/static/yourvideohere-6d56e81119383289e1657b2c83491655.mp4",
        extension: "mp4"
      },
      appIconLarge: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABQUlEQVQ4y+WUPYqDUBSF/YlECCESUKzFDYSQLgELEbIALWyDnUXAzjKtfcgKsoSQzgVIdpBWrNRWsTjDezAykzEZZ5JmGOGA7+r7OOf6vAzDMHix/jqQ4zjwPN/qKSCBddVZlv29Q13X4XkegiCAZVl9oPcdbLdb3F7n8xmj0egRtDvmer2mgOv1CsMwoGka9vs9rR2Px0ct6XZ3Op3o5uVy+el5GIbwff9nPRQEAWmaoizLNt5isYDrujBNkzoeDof9geTlLMuQ5znG4zGtHQ6Hto9N00BV1Xt97I4cxzHdPJ/P6Xo6nUJRFCRJgqqqIMtyP+D74bVtmwIvlwtmsxkkScJms6G1oigovBfwo3a73ZdjQxzWdd0/8q2IO/JloyjCarXCZDKB4zgQRfF1v97Tw2EwGFCRexLxmyHx3wbsG1YlBcC4jo2FAAAAAElFTkSuQmCC",
            aspectRatio: 1,
            src: "/images/icon.png",
            srcSet:
              "/images/icon.png 30w,\n/images/icon.png 60w,\n/images/icon.png 120w,\n/images/icon.png 180w,\n/images/icon.png 240w,\n/images/icon.png 360w,\n/images/icon.png 512w",
            sizes: "(max-width: 120px) 100vw, 120px"
          }
        }
      },
      headerImage: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGWvm77lyIg/8QAGxABAAICAwAAAAAAAAAAAAAAAQACAxEEEiH/2gAIAQEAAQUCryfTNRGxNwdndn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAAxACD/2gAIAQEABj8CJz//xAAZEAEBAQADAAAAAAAAAAAAAAABABEhQXH/2gAIAQEAAT8hEA6LpT2W8MKWML//2gAMAwEAAgADAAAAEBTf/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ENSf/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExUWH/2gAIAQEAAT8QuBnUeRNWGUJaBT5CbfIpHzpHFdz/2Q==",
            aspectRatio: 1.5,
            src: "/images/headerimage.png",
            srcSet:
              "/images/headerimage.png 269w,\n/images/headerimage.png 536w,\n/images/headerimage.png 1071w,\n/images/headerimage.png 1607w,\n/images/headerimage.png 2142w,\n/images/headerimage.png 3213w,\n/images/headerimage.png 6000w",
            sizes: "(max-width: 1071px) 100vw, 1071px"
          }
        }
      },
      iphonePreviewBlack: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsSAAALEgHS3X78AAABg0lEQVRIx+2XPU/DMBCGPcCYpJQ4H3Y+p8ZO+X+MiImZAYlfwG9CYqfAwkRBJHecraofESlFytAhkd4ksn2P7pwoeY8xOoSQV9znr5wHbRiGEEUxiFiAlBISmUCSGKX2KgWNCwkxzUdRBGEQtkEQvNG6a8NiqlKXeV6g67roeR6QsFeTCZ6FcXfcxuR5jlrVt2w+v3jk3DfA7wkFkGCvptPuGDqO01K2DSWHTOv6xfctcL2gV6usOuNgqqOyYTarWlbr+nkLuLN4N9jrnTOxBMSqUsCU0h99wEO1yhBtyXRqBwVSyYthM1T6c2CgQgLaJzUUcNg91Fq/D11ye/R7+HXc72G9+3EYgSNwBI7AETgC/wnc2Dn60S8ONpy/a204q4oMJ5mlp5UlbjqW+E/QliUGMvsNOVhkRVHeGMNtMtw27a7n2r3ZK29j9MuyxLIoH0wjcEqtwZ1/7i8552jaiti0FUIgtQqYpilmWWZdvlWWY5ZmaFsMadqLGMmwL+n+nlgnP+ZNxPqMydHDAAAAAElFTkSuQmCC",
            aspectRatio: 0.49887892376681614,
            src: "/images/black.png",
            srcSet:
              "/images/black.png 100w,\n/images/black.png 200w,\n/images/black.png 400w,\n/images/black.png 600w,\n/images/black.png 800w,\n/images/black.png 890w",
            sizes: "(max-width: 400px) 100vw, 400px"
          }
        }
      },
      iphonePreviewBlue: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRIx+2Wz0/TYBjHe2CMQde3bwt/gD+2UcpGiOu6H9RtODa2UbCOyYCMaLwRjQcvHNGTJw8eTPwL/BP8OzyaeFf04kk00ufxbTuJQxCi78WkTT5p3rfv88nTJ036FQR2Gb1H+ynL/pgsttzphRXQrtugl9dgtnIT0lUPB9KLjn+frayBzpgpr4Jm2ZBaaLtaxflUuLv/xHMJpZ29vWQmixPRERRjURBjoxgQPcEoxsfHUKL0eO3d46zGq01mDKw+ePZcMFubb1U5jkSm32WqIAP+BFUnh9esRpKpO0Wlo9LGfRSyS86BKktIiAyy7INnQgg7R07ug8T2plQFCnbfZcJb71VKfgqHDg8XkzOfMSFMKhQLqzsgGMsbXxQSP1V4UbwOB0IUjGbPVYjIZshLWO98+GWG/y7MNXtf/Vfm1aG50kdFmgDyl7LfO2xvc55ho/uZ7wxbW3w75D/D5uY3zt/hOt/vkAkPQmEoDIWhMBT+F8IG9w47PIRBnLP7IGRrDvtJkYsFztM5Dpz59pYr5JZvvwvCEj2SWX5mwAA8B//cIBKDH4m7u+xH39l9elVLs9AeARbKQWTBXByPBsTOgZ3xa8YimNDn0Lr3+JWw/QYjmdadF5fmrcPL8xZeuVaGRLYKqdwiTudrOFNYQr1YR73UCCg22F4dtXwNUuYNSBhVTJq1Q6P78KX5Gkd+AI6V8ZXiacB9AAAAAElFTkSuQmCC",
            aspectRatio: 0.49887892376681614,
            src: "/images/blue.png",
            srcSet:
              "/images/blue.png 100w,\n/images/blue.png 200w,\n/images/blue.png 400w,\n/images/blue.png 600w,\n/images/blue.png 800w,\n/images/blue.png 890w",
            sizes: "(max-width: 400px) 100vw, 400px"
          }
        }
      },
      iphonePreviewCoral: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsSAAALEgHS3X78AAACCElEQVRIx+2WT2sTQRjGh2qadLdhZrP9EFbbps3/f/ZPsplNYhK01TSNaUtKKngVhF6EtgcRvCkUxKvgBxD8FH4BwbutXjxZxe77+m6UmgajRcbbLjy7yzMzP56dXZaHMToeNq7vNrPJDyvpuHMrk4RGLgXNq2lYm89AayFLykFrMde7ul6TtErjjWwKbmYSTns+8/Hpxuq+y2KP242d1PQVHPEH0Kdp4BvTcKg0Hf3GhDuvz9NgJBDA9MwUvrjbecK6ZflWFwJDQnwLGQaS4I8yzUEPDcGd8VDoZGeljuy2tXQUFAYKzkEI4QqHinPkpAEfXM8wJ6BbkQ5rW0vvg8Yp8Mzks4v50DHurjVN3K7YwDqy8Fnn4rfA86oH7wElsi274CgFrhfzh317qCKh9UVdQhvZnbJEjWCG4KgE2C0VHY0SElBNwk2Z/zQuFD5yt2SpTah8D+ktf1X6ljeUfocuUOaP1AKLHtADekAP6AHVA+V/+GOvq0nYq3NUXoG1CouHff3wX6CnhbNjWw6j07uflfhkoBLjX/SrElOYIFXi+zdqyB4sVx/NTl5CKt7g13UYpWI+SqX8vPJrOlwIjGHk8iQebK69ZPjmte9eqXBgh6ePi+EplHMzUIqEoRybw2vxKFaTMayl4lhPJ36I7mvkVRNRqMQiUI7OYj0eOd5brj7DV88vfgccE/r2wv9fLAAAAABJRU5ErkJggg==",
            aspectRatio: 0.49887892376681614,
            src: "/images/coral.png",
            srcSet:
              "/images/coral.png 100w,\n/images/coral.png 200w,\n/images/coral.png 400w,\n/images/coral.png 600w,\n/images/coral.png 800w,\n/images/coral.png 890w",
            sizes: "(max-width: 400px) 100vw, 400px"
          }
        }
      },
      iphonePreviewWhite: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsSAAALEgHS3X78AAAByUlEQVRIx+2Wy2oiQRSGS2kFb7TK5EV0JT6B4t2F1/aKeH2AIIIhIARxYxaBuHM1G19oYPZJZjZZxRlin5NzOhdUogmhdumGv6v6VJ2vT1U19C8EXbPZ7KxcLv/J5XJ6oVCAYrEI9AyapkGlUtmRpj3HS6WSMS+fz+u1Wu3vYrE4Z5aYz+enoVAILRYL2mw2UBQFD4nG0e5WUaF2KwacGw6HcbVaXYpOp/PL5XKh3+9/JHELR/XjZD/GOToxNuPxGEW1Wr1zu93o9XrhRXhQqooqaS8OHPP5fNDv93VB67/xeDz4Hmw3WT04Rn0jl4AgWq3WAy+Z33C0uiN6hRMQRbvd1p1OpzxgvV6/3dpDKRX+k1rhYDBAh8MBBEQpwG63K3cPm83mPZ+ytD2UXiHfpO4hnfJ/qRU2Gg253yEB70ygCTSBJtAEfjcgmwb2NjKARm6v1wM2nLdb/vAr0DfDyU6O/eFv/o2Srd3sWWL8QNvzgFa5GY1GKCaTyUUgEGDTDna7nWWY88+Kc6xWKwaDQVwulz8FItqGw+FVLBZbRyIRjEajQH1IJBKYTCYxnU5jJpMxlM1mjZZjqVSK50A8Huf4ejqdXhNLeQLmjhmqvFDnQAAAAABJRU5ErkJggg==",
            aspectRatio: 0.49887892376681614,
            src: "/images/white.png",
            srcSet:
              "/images/white.png 100w,\n/images/white.png 200w,\n/images/white.png 400w,\n/images/white.png 600w,\n/images/white.png 800w,\n/images/white.png 890w",
            sizes: "(max-width: 400px) 100vw, 400px"
          }
        }
      },
      iphonePreviewYellow: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsSAAALEgHS3X78AAACJUlEQVRIx+2Wz0/TYBjHK25V+2NvWxv/g4ngtiKoce1Qpg6LKPshk7GOAiIwggfjwajRRA0HQuKFg9HEiydv/j8m3mV68SQa1+fx7WqcQxYxeQ8e2uSTN33f9/nk6dsm/XIcvZ49HHnsFJMfpyYS3nQhBU7RgFppAGaunQB3chDc8lDA5FBrzseh69WCAZV80psrG59ereee+i5u88novTMne3HffgGjvAQRXsQ2Ev5+Hz0gIR870jHv1/i16VPH8O2L/CZXdzPvBElDTSPfNU2lowJ/orZH/fDONdRU4omy3nx0+zxys9fTDSmmoaIQUBTFB7tCCBLKjnkgJIaqpsNNx/J84Qe5LezY3FlMuq5RISiqjkszGeAWHfOLKKmo7iLcK36HvnBldhi5pZrpCYyEdZcK56fMLanLI/+zMOjQ+sqsQ1+4OpfBQ6IKqkKQiXDFzXiCyLDDhWnzsygzPMO6a7HtkPkZLtesb0zf8nyF8Xd4o2I2JDkUhsJQGApD4f8tdBkLW2GJZpsGg39KK84tu8PAueX0lrzXwLk7vwLnQpUGzsWq9f5nJG4G8ZbG3AD8C8G+IBKDFNObD25lkVu7c259IBXHnogA/EEJeBrMox2IXQjW/ZqeiIiDxlF8vWG/4RDXovfrp5+PZ+Pb9kgcL2d7YfxCH1zN9WN+NIEFO4nFsRSWxowWRUrBTmH+UgImcsfhysU+LNn92xt3z75EXI38AGmbAUNucMKGAAAAAElFTkSuQmCC",
            aspectRatio: 0.49887892376681614,
            src: "/images/yellow.png",
            srcSet:
              "/images/yellow.png 100w,\n/images/yellow.png 200w,\n/images/yellow.png 400w,\n/images/yellow.png 600w,\n/images/yellow.png 800w,\n/images/yellow.png 890w",
            sizes: "(max-width: 400px) 100vw, 400px"
          }
        }
      }
    };
    return (
      <>
        <Layout tagName={"main"}>
          <div
            className="imageWrapper"
            style={{
              backgroundImage: `linear-gradient(${configs.cover_overlay_color_rgba},${configs.cover_overlay_color_rgba}),url(${data.headerImage.childImageSharp.fluid.src})`
            }}
          >
            <div className="headerBackground">
              <div className="container">
                <header>
                  <div className="logo">
                    <div className="appIconShadow">
                      <svg width="0" height="0">
                        <defs>
                          <clipPath id="shape">
                            <path
                              id="shape"
                              d="M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z"
                              transform="translate(-6131 -218)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <Img
                        fluid={data.headerIcon.childImageSharp.fluid}
                        className="headerIcon"
                      />
                    </div>
                    <p className="headerName">{configs.app_name}</p>
                  </div>
                  <nav>
                    <ul>
                      {configs.presskit_download_link && (
                        <li>
                          <a href={configs.presskit_download_link}>Press Kit</a>
                        </li>
                      )}
                    </ul>
                  </nav>
                </header>
                <div
                  className="iphonePreview"
                  style={{
                    backgroundImage: `url(${
                      configs.device_color === "black"
                        ? data.iphonePreviewBlack.childImageSharp.fluid.src
                        : configs.device_color === "blue"
                        ? data.iphonePreviewBlue.childImageSharp.fluid.src
                        : configs.device_color === "coral"
                        ? data.iphonePreviewCoral.childImageSharp.fluid.src
                        : configs.device_color === "white"
                        ? data.iphonePreviewWhite.childImageSharp.fluid.src
                        : data.iphonePreviewYellow.childImageSharp.fluid.src
                    })`
                  }}
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 0 0"
                    style={{ position: "absolute" }}
                  >
                    <clipPath
                      id="screenMask"
                      clipPathUnits="objectBoundingBox"
                      transform="scale(.00257 .00119)"
                    >
                      <path
                        d="M6490.24,1234.36H6216.28c-2.57,0-10.55-.07-12.07-0.07a87.524,87.524,0,0,1-12-1.03,40.051,40.051,0,0,1-11.4-3.79,38.315,38.315,0,0,1-16.82-16.84,39.948,39.948,0,0,1-3.78-11.42,72.257,72.257,0,0,1-1.04-12.02c-0.06-1.83-.06-5.56-0.06-5.56V452.125h0s0.06-11.391.06-12.086a87.9,87.9,0,0,1,1.04-12.025,39.843,39.843,0,0,1,3.78-11.413,38.283,38.283,0,0,1,16.82-16.847,39.762,39.762,0,0,1,11.4-3.785,71.909,71.909,0,0,1,12-1.037c16.99-.567,36.32-0.061,34.51-0.061,5.02,0,6.5,3.439,6.63,6.962a35.611,35.611,0,0,0,1.2,8.156,21.326,21.326,0,0,0,19.18,15.592c2.28,0.192,6.78.355,6.78,0.355H6433.7s4.5-.059,6.79-0.251a21.348,21.348,0,0,0,19.18-15.591,35.582,35.582,0,0,0,1.19-8.154c0.13-3.523,1.61-6.962,6.64-6.962-1.81,0,17.52-.5,34.5.061a71.923,71.923,0,0,1,12.01,1.038,39.832,39.832,0,0,1,11.4,3.784,38.283,38.283,0,0,1,16.82,16.844,40.153,40.153,0,0,1,3.78,11.413,87.844,87.844,0,0,1,1.03,12.023c0,0.695.06,12.084,0.06,12.084h0V1183.64s0,3.72-.06,5.55a72.366,72.366,0,0,1-1.03,12.03,40.2,40.2,0,0,1-3.78,11.41,38.315,38.315,0,0,1-16.82,16.84,40.155,40.155,0,0,1-11.4,3.79,87.669,87.669,0,0,1-12.01,1.03c-1.52,0-9.5.07-12.07,0.07"
                        transform="translate(-6159.12 -394.656)"
                      />
                    </clipPath>
                  </svg>
                  {configs.video_or_screenshot === "video" && (
                    <div className="videoContainer">
                      <video
                        className="screenvideo"
                        autoPlay={true}
                        controls={true}
                      >
                        <source
                          src={data.videoScreen.publicURL}
                          type={`video/${
                            data.videoScreen.extension === "mov"
                              ? `mp4`
                              : data.videoScreen.extension
                          }`}
                        />
                      </video>
                    </div>
                  )}

                  {configs.video_or_screenshot === "screenshot" && (
                    <Img
                      fluid={data.iphoneScreen.childImageSharp.fluid}
                      className="iphoneScreen"
                    />
                  )}
                </div>
                <div className="appInfo">
                  <div className="appIconShadow">
                    <svg width="0" height="0">
                      <defs>
                        <clipPath id="shape120">
                          <path
                            id="shape"
                            d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                            transform="translate(-6701 -458)"
                            filter="url(#f1)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <Img
                      fluid={data.appIconLarge.childImageSharp.fluid}
                      className="appIconLarge"
                    />
                  </div>
                  <div className="appNamePriceContainer">
                    <h1 className="appName">{configs.app_name}</h1>
                    <h2 className="appPrice">{configs.app_price}</h2>
                  </div>
                  <div className="appDescriptionContainer">
                    <p className="appDescription">{configs.app_description}</p>
                  </div>
                  <div className="downloadButtonsContainer">
                    {configs.playstore_link && (
                      <a
                        className="playStoreLink"
                        href={configs.playstore_link}
                      >
                        <Img
                          fixed={data.playStore.childImageSharp.fixed}
                          className="playStore"
                        />
                      </a>
                    )}
                    {configs.appstore_link && (
                      <a className="appStoreLink" href={configs.appstore_link}>
                        <Img
                          fixed={data.appStore.childImageSharp.fixed}
                          className="appStore"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="features">
                  {configs.features.map(feature => {
                    if (feature.title) {
                      return (
                        <div className="feature">
                          <div>
                            <span className="fa-stack fa-1x">
                              <i className="iconBack fas fa-circle fa-stack-2x" />
                              <i
                                className={`iconTop fas fa-${feature.fontawesome_icon_name} fa-stack-1x`}
                              />
                            </span>
                          </div>
                          <div className="featureText">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <footer>
                  <p className="footerText">
                    Made by{" "}
                    {configs.your_link ? (
                      <a href={configs.your_link}>{configs.your_name}</a>
                    ) : (
                      `${configs.your_name}`
                    )}
                    {configs.your_city && ` in ${configs.your_city}`}
                  </p>
                  <div className="footerIcons">
                    {configs.facebook_username && (
                      <a
                        href={`https://facebook.com/${configs.facebook_username}`}
                        aria-label="Facebook"
                      >
                        <span className="fa-stack fa-1x">
                          <i className="socialIconBack fas fa-circle fa-stack-2x" />
                          <i className="socialIconTop fab fa-facebook fa-stack-1x" />
                        </span>
                      </a>
                    )}

                    {configs.linkedin_username && (
                      <a
                        href={`https://www.linkedin.com/in/${configs.linkedin_username}`}
                        aria-label="LinkedIn"
                      >
                        <span className="fa-stack fa-1x">
                          <i className="socialIconBack fas fa-circle fa-stack-2x" />
                          <i className="socialIconTop fab fa-linkedin fa-stack-1x" />
                        </span>
                      </a>
                    )}

                    {configs.twitter_username && (
                      <a
                        href={`https://twitter.com/${configs.twitter_username}`}
                        aria-label="Twitter"
                      >
                        <span className="fa-stack fa-1x">
                          <i className="socialIconBack fas fa-circle fa-stack-2x" />
                          <i className="socialIconTop fab fa-twitter fa-stack-1x" />
                        </span>
                      </a>
                    )}

                    {configs.github_username && (
                      <a
                        href={`https://github.com/${configs.github_username}`}
                        aria-label="GitHub"
                      >
                        <span className="fa-stack fa-1x">
                          <i className="socialIconBack fas fa-circle fa-stack-2x" />
                          <i className="socialIconTop fab fa-github fa-stack-1x" />
                        </span>
                      </a>
                    )}

                    {configs.email_address && (
                      <a
                        href={`mailto:${configs.email_address}`}
                        aria-label="Email"
                      >
                        <span className="fa-stack fa-1x">
                          <i className="socialIconBack fas fa-circle fa-stack-2x" />
                          <i className="socialIconTop fas fa-envelope fa-stack-1x" />
                        </span>
                      </a>
                    )}
                  </div>
                </footer>
                {/*TODO: Add App Store API */}
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
