import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid ${({ theme }) => theme.colors.primary};
  z-index: 1;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  padding: 2rem;
  flex-direction: column;
  height: 50%;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease-in-out;

  ${({ theme }) => theme.media.phone} {
    height: 60%;
    width: 90%;
  }
  ${({ theme }) => theme.media.landscape} {
    height: 60%;
    width: 80%;
  }
`;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  filter: blur(${({ isModalOpen }) => isModalOpen && '5px'});
`;

const NoteDetails = ({ isVisible, content, children }) => {
  return (
    <>
      <Wrapper isVisible={isVisible}>
        <p>{content}</p>
      </Wrapper>
      <StyledWrapper isModalOpen={isVisible}>{children}</StyledWrapper>
    </>
  );
};

export default NoteDetails;
