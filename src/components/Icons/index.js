import React from 'react';

export const LeftArrow = ({width}) => <svg width={width} viewBox="0 0 50 80">
        <polyline fill="none" stroke="#808080" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
    </svg>;

export const RightArrow = ({width}) => <svg width={width} viewBox="0 0 50 80">
    <polyline fill="none" stroke="#808080" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
</svg>;