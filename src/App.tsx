import React, { FC, useCallback, useState } from 'react';
// import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';
import { Main } from './components/AdminPanel/Main';
import { TeamCreator } from './components/TeamCreator';

const App: FC = () => {
  const [step, setStep] = useState(1);
  const [firstTeam, setFirstTeam] = useState('');
  const [secondTeam, setSecondTeam] = useState('');
  const nextStep = useCallback((team1: string, team2: string) => {
    setFirstTeam(team1);
    setSecondTeam(team2);
    setStep(2);
  }, [setStep]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {
          step === 1 ? (
            <TeamCreator nextStep={nextStep} />
          ) : (
            <Main firstTeam={firstTeam} secondTeam={secondTeam} />
          )
        }
      </ThemeProvider>
    </div>
  );
};

export default App;
