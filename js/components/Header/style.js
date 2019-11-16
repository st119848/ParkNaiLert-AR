import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 10px 0 0 20px;
    background-color: transparent;
`;

export const Row = styled.View`
    flex-direction: row;
   justify-content: space-between;
`;

export const BackArrow = styled.View`
    width: 25px;
    height: 25px;
    border-bottom-width: 4;
    border-left-width: 4;
    border-radius: 2;
    border-color: white;
    transform: rotate(45deg);
`;

export const CloseArrow = styled.Image`
    width: 75px;
    height: 75px;
`;

export const Column = styled.View`
    justify-content: center;
`;
// align-items: ${props => props.AlignItem == undefined ? 'center' : props.AlignItem};

export const Touch = styled.TouchableOpacity``;