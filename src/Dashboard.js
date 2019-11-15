import React from 'react';
import { AppBar, Slider, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



const Dashboard = () => {
  const classes = makeStyles({
    card: {
      minWidth: 275,
      border: "1px solid black",
      backgroundColor: 'red',
      width: '50px'
    },

  });
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }



  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handlechange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });

    return (
      <div>
        <AppBar position="relative">
          <Toolbar>
            <IconButton color="inherit">
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              My Music App
        </Typography>
          </Toolbar>
        </AppBar>
        <div className="cards">
          <Card className={classes.card}>
            <h2>Online Mode</h2>
            <p>Is this application connectednto the internet? </p>
            <Switch
              checked={state.checkedA}
              onChange={handleChange('checkedA')}
              value="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Card>
          <Card className={classes.card}>
            <h2>Online Mode</h2>
            <p>Is this application connectednto the internet? </p>

            <Slider
              defaultValue={20}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
            />

          </Card>
          <Card className={classes.card}>
            <h2>Online Mode</h2>
            <p>Is this application connectednto the internet? </p>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="SoundQuality-native-simple">sound</InputLabel>
              <Select
                native
                value={state.sound - quality}
                onChange={handleChange('SoundQuality')}
                inputProps={{
                  name: 'SoundQuality',
                  id: 'SoundQuality-native-simple',
                }}
              >
                <option value="" />
                <option value={"Low"}>Low</option>
                <option value={"Normal"}>Normal</option>
                <option value={"High"}>High</option>
              </Select>
            </FormControl>
          </Card>

        </div>
      </div>
    );
  }

  export default Dashboard;