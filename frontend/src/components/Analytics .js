import React from 'react'
import { Chart } from 'react-charts'
import {Grid,TextField} from '@material-ui/core';
// import { KeyboardDatePicker} from '@material-ui/pickers'
import DateTimePicker from 'react-datetime-picker';
import {CanvasJSChart} from 'canvasjs-react-charts'
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import APIService from '../APIService';
import {useForm} from 'react-hook-form'

function Analytics () {
  const {register,errors,handleSubmit} = useForm()
  const [start, setStart] = React.useState()
  const [end, setEnd] = React.useState()
  const [dates, setDates] = React.useState([])
  const [count, setCount] = React.useState([])

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };


    // const data = React.useMemo(
    //     () => [
    //       {
    //         label: 'Series 1',
    //         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    //       }
          
    //     ],
    //     []
    //   )
     
    //   const axes = React.useMemo(
    //     () => [
    //       { primary: true, type: 'linear', position: 'bottom' },
    //       { type: 'linear', position: 'left' }
    //     ],
    //     []
    //   )
    
    const ReagisterBtn = () =>{
      APIService.Dates({start,end})
         .then(res =>{              
            
          setDates(res)
          // setCount(res)
            
          })
          .catch(error =>{
            console.log(error)
          })
      
        }

      // const getdate=dates.map((item)=>{
      //   return item.date
      // })
      // const getcount=dates.map((item)=>{
      //   return item.Count
      // })
      
      const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Number of Forms Submitted"
        },
        axisX:{
          valueFormatString: "YY MMM DD",
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            tickLength: 0
          }},
        axisY: {
            title: "Number of Forms ( pre day )",
            tickLength: 0
        },
        data: [
        {
            type: "line",
            xValueFormatString: "DDD MMM YYYY",
            yValueFormatString: "#,##0.## Forms",
            dataPoints: dates.map((item)=>{
              return {x:new Date(item.date),y:item.Count}
            })
        }
        ]
    }
    console.log(dates)
    return (
    <div>
      <form onSubmit={handleSubmit(ReagisterBtn)}>
        <div
      style={{
        width: 'auto',
        height: 'auto'
      }}
    >
      {/* <Chart data={data} axes={axes} /> */}
      <CanvasJSChart options = {options}/>
    </div>
    <Grid container justify="space-around">
    <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2021-05-3"
        value = {start} 
        onChange = {e => setStart(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
     <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2021-05-4"
        value = {end} 
        onChange = {e => setEnd(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <Fab variant="extended" type="submit">
           <SendIcon color={'primary'} style={{marginRight:'10px'}}/>
       Post
      </Fab>
        </Grid>
        <hr/>
        </form>
       
    </div>

    )
}

export default Analytics 
