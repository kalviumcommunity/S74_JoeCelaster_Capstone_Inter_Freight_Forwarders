import React from 'react';

const ProfileAvatar = () => {
    return (
        <div>
            <figure
    class="size-8 z-[3] [&amp;:where(:nth-child(2n))]:size-11 [&amp;:where(:nth-child(2n))]:z-[4] [&amp;:where(:not(:first-child):not(:last-child):not(:nth-child(2n)))]:size-16 [&amp;:where(:not(:first-child):not(:last-child):not(:nth-child(2n)))]:z-[6] cursor-pointer bg-white relative rounded-full object-cover border border-solid border-zinc-300"
  >
    <svg viewBox="0 0 256 256" fill="skyblue">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
      ></path>
    </svg>
  </figure>
        </div>
    );
}

export default ProfileAvatar;
