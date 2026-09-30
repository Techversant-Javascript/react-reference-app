import styled from 'styled-components';

export const ProgressWrapper = styled.div`
  display: inline-flex;
  width: 40%;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
`;

export const LinearTrack = styled.div`
  width: 100%;
  height: var(--progress-height, 8px);

  background: var(--slate-600);
  border-radius: var(--radius-full, 9999px);

  overflow: hidden;
`;

interface LinearFillProps {
  $percentage: number;
}

export const LinearFill = styled.div<LinearFillProps>`
  height: 100%;
  width: ${({ $percentage }) => `${$percentage}%`};

  background: var(--blue-500);
  border-radius: inherit;

  transition: width 0.3s ease;
`;

export const CircularWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const CircularLabel = styled.span`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--fs-sm);
  color: var(--blue-700);

  text-align: center;
  pointer-events: none;
`;

export const TextProgress = styled.span`
  font-size: var(--fs-sm);
  color: var(--blue-700);
`;