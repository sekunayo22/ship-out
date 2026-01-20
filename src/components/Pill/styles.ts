import styled from "@emotion/styled";

export const PillContainer = styled.div<{ status?: 'up' | 'down' }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ status }) => status === 'up' ? '#14CA74' : '#FF5A65'};
  font-feature-settings: 'liga' off, 'clig' off;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  border-radius: 2px;
border: 0.6px solid ${({ status }) => status === 'up' ? 'rgba(5, 193, 104, 0.20)' : 'rgba(255, 90, 101, 0.20)'};
background: ${({ status }) => status === 'up' ? 'rgba(5, 193, 104, 0.20)' : 'rgba(255, 90, 101, 0.20)'};

`