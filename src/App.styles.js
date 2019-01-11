import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TopBar = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #353a3f;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    font-size: 30px;
`;

const ClockFrame = styled.div`
    width: 200px;
    height: 200px;
    border: 20px solid #32363d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    color: #81d8f7;
    background-color: #282c33;
`;

const Time = styled.p`
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    margin: 5px;
`;

const ToggleButton = styled.div`
    margin-top: 10px;
    width: 100px;
    height: 40px;
    border-radius: 18.5px;
    background-color: darkgray;
    border: ${({ border }) => border && '2px solid black'};
`;

const CalendarDates = styled.p`
    font-size: 15px;
    margin: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
`;

export {
    ClockFrame,
    Time,
    ToggleButton,
    CalendarDates,
    TopBar,
    MainContainer
}