import styled, { css } from "styled-components";
import { DrawerPlacement } from "./Drawer.types";

interface StyledDrawerProps {
  $open: boolean;
  $placement: DrawerPlacement;
}

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

    transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

    z-index: 999;
`;

const placementStyles = {
  left: css<StyledDrawerProps>`
    top: 0;
    left: 0;
    width:350px;
    height: 100vh;
     transform: ${({ $open }) =>
      $open
        ? "translateX(0)"
        : "translateX(-100%)"};
  `,

  right: css<StyledDrawerProps>`
  top: 0;
  right: 0;

  width: 350px;
  height: 100vh;

  transform: ${({ $open }) =>
      $open
        ? "translateX(0)"
        : "translateX(100%)"};
  `,
  top: css<StyledDrawerProps>`
  top: 0;
  left: 0;

  width: 100vw;
  height: 350px;

  transform: ${({ $open }) =>
      $open
        ? "translateY(0)"
        : "translateY(-100%)"};
  `,

  bottom: css<StyledDrawerProps>`
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 350px;

  transform: ${({ $open }) =>
      $open
        ? "translateY(0)"
        : "translateY(100%)"};
  `,
};

export const DrawerContainer = styled.div<StyledDrawerProps>`
  width:320px;
  height:320px;
  position: fixed;
  background: var(--color-gray-600);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  transition: 
  transform 0.3s ease,
  visibility 0.3s ease;

  z-index: 1000;
  overflow-y: auto;
  overflow-x: auto;

  visibility: ${({ $open }) =>
    $open ? "visible" : "hidden"};

  pointer-events: ${({ $open }) =>
    $open ? "auto" : "none"};

  ${({ $placement }) => placementStyles[$placement]}
`;