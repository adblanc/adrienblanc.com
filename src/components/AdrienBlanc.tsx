import { useEffect } from "react";
import { animateSgv } from "../utils/svg";

const getDelayByLength = (length: number) => {
  const totalDuration = 3000;

  return totalDuration / length / 1000;
};

export interface AdrienBlancProps {
  idLeft: string;
  idRight: string;
}

const AdrienBlanc: React.SFC<AdrienBlancProps> = ({ idLeft, idRight }) => {
  useEffect(() => {
    const logoOneLength = document.getElementById(idLeft)!.childElementCount;
    const logoTwoLength = document.getElementById(idRight)!.childElementCount;

    animateSgv(idLeft, 0, getDelayByLength(logoOneLength));
    animateSgv(idRight, 0, getDelayByLength(logoTwoLength));
  }, []);

  const strokeColor = "#2d3748";

  return (
    <div className="text-center w-full flex justify-center p-4">
      <svg
        id={idLeft}
        className="mr-3 w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5"
        viewBox="0 0 488 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.416 81.68H25.64L17.576 104H3.75201L40.04 4.208H55.16L91.304 104H77.48L69.416 81.68ZM65.672 71.024L47.528 20.336L29.384 71.024H65.672Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M138.367 3.632C149.311 3.632 158.767 5.696 166.735 9.824C174.799 13.856 180.943 19.664 185.167 27.248C189.487 34.832 191.647 43.76 191.647 54.032C191.647 64.304 189.487 73.232 185.167 80.816C180.943 88.304 174.799 94.064 166.735 98.096C158.767 102.032 149.311 104 138.367 104H107.119V3.632H138.367ZM138.367 93.2C151.327 93.2 161.215 89.792 168.031 82.976C174.847 76.064 178.255 66.416 178.255 54.032C178.255 41.552 174.799 31.808 167.887 24.8C161.071 17.792 151.231 14.288 138.367 14.288H120.223V93.2H138.367Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M261.78 104L237.876 62.96H222.036V104H208.932V3.632H241.332C248.916 3.632 255.3 4.928 260.484 7.52C265.764 10.112 269.7 13.616 272.292 18.032C274.884 22.448 276.18 27.488 276.18 33.152C276.18 40.064 274.164 46.16 270.132 51.44C266.196 56.72 260.244 60.224 252.276 61.952L277.476 104H261.78ZM222.036 52.448H241.332C248.436 52.448 253.764 50.72 257.316 47.264C260.868 43.712 262.644 39.008 262.644 33.152C262.644 27.2 260.868 22.592 257.316 19.328C253.86 16.064 248.532 14.432 241.332 14.432H222.036V52.448Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M309.645 3.632V104H296.541V3.632H309.645Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M345.083 14.288V47.84H381.659V58.64H345.083V93.2H385.979V104H331.979V3.48801H385.979V14.288H345.083Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M484.719 104H471.615L418.911 24.08V104H405.807V3.48801H418.911L471.615 83.264V3.48801H484.719V104Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
      <svg
        id={idRight}
        className="ml-3 w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5"
        viewBox="0 0 448 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.344 53.304C56.992 53.88 60.304 55.368 63.28 57.768C66.352 60.168 68.752 63.144 70.48 66.696C72.304 70.248 73.216 74.04 73.216 78.072C73.216 83.16 71.92 87.768 69.328 91.896C66.736 95.928 62.944 99.144 57.952 101.544C53.056 103.848 47.248 105 40.528 105H3.08801V4.632H39.088C45.904 4.632 51.712 5.784 56.512 8.088C61.312 10.296 64.912 13.32 67.312 17.16C69.712 21 70.912 25.32 70.912 30.12C70.912 36.072 69.28 41.016 66.016 44.952C62.848 48.792 58.624 51.576 53.344 53.304ZM16.192 47.976H38.224C44.368 47.976 49.12 46.536 52.48 43.656C55.84 40.776 57.52 36.792 57.52 31.704C57.52 26.616 55.84 22.632 52.48 19.752C49.12 16.872 44.272 15.432 37.936 15.432H16.192V47.976ZM39.376 94.2C45.904 94.2 50.992 92.664 54.64 89.592C58.288 86.52 60.112 82.248 60.112 76.776C60.112 71.208 58.192 66.84 54.352 63.672C50.512 60.408 45.376 58.776 38.944 58.776H16.192V94.2H39.376Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M104.505 94.344H139.641V105H91.4005V4.632H104.505V94.344Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M212.885 82.68H169.109L161.045 105H147.221L183.509 5.208H198.629L234.773 105H220.949L212.885 82.68ZM209.141 72.024L190.997 21.336L172.853 72.024H209.141Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M329.5 105H316.396L263.692 25.08V105H250.588V4.488H263.692L316.396 84.264V4.488H329.5V105Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M346.942 54.744C346.942 44.952 349.15 36.168 353.566 28.392C357.982 20.52 363.982 14.376 371.566 9.96C379.246 5.544 387.742 3.336 397.054 3.336C407.998 3.336 417.55 5.976 425.71 11.256C433.87 16.536 439.822 24.024 443.566 33.72H427.87C425.086 27.672 421.054 23.016 415.774 19.752C410.59 16.488 404.35 14.856 397.054 14.856C390.046 14.856 383.758 16.488 378.19 19.752C372.622 23.016 368.254 27.672 365.086 33.72C361.918 39.672 360.334 46.68 360.334 54.744C360.334 62.712 361.918 69.72 365.086 75.768C368.254 81.72 372.622 86.328 378.19 89.592C383.758 92.856 390.046 94.488 397.054 94.488C404.35 94.488 410.59 92.904 415.774 89.736C421.054 86.472 425.086 81.816 427.87 75.768H443.566C439.822 85.368 433.87 92.808 425.71 98.088C417.55 103.272 407.998 105.864 397.054 105.864C387.742 105.864 379.246 103.704 371.566 99.384C363.982 94.968 357.982 88.872 353.566 81.096C349.15 73.32 346.942 64.536 346.942 54.744Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default AdrienBlanc;
