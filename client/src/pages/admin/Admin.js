import React from "react";
// import {
//   Grid,
//   LinearProgress,
//   Select,
//   OutlinedInput,
//   MenuItem
// } from "@material-ui/core";
// import { useTheme } from "@material-ui/styles";
// import {
//   ResponsiveContainer,
//   ComposedChart,
//   AreaChart,
//   LineChart,
//   Line,
//   Area,
//   PieChart,
//   Pie,
//   Cell,
//   YAxis,
//   XAxis
// } from "recharts";
// import MUIDataTable from "mui-datatables";
// import { Typography } from "../../components/Wrappers";
// import Widget from "../../components/Widget";
// import Dot from "../../components/Sidebar/components/Dot";
// import classnames from "classnames";
// styles
import "react-toastify/dist/ReactToastify.css";
// import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// const datatableData = [
//   ["Joe James", "Example Inc.", "Yonkers", "NY"],
//   ["John Walsh", "Example Inc.", "Hartford", "CT"],
//   ["Bob Herm", "Example Inc.", "Tampa", "FL"],
//   ["James Houston", "Example Inc.", "Dallas", "TX"],
//   ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
//   ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
//   ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
//   ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
//   ["Meral Elias", "Example Inc.", "Hartford", "CT"],
//   ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
//   ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
//   ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
//   ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
//   ["Annas Siranush", "Example Inc.", "Yonkers", "NY"],
//   ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
//   ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
//   ["John Walsh", "Example Inc.", "Hartford", "CT"],
//   ["Bob Herm", "Example Inc.", "Tampa", "FL"],
//   ["James Houston", "Example Inc.", "Dallas", "TX"],
//   ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
//   ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
//   ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
//   ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
//   ["Meral Elias", "Example Inc.", "Hartford", "CT"],
//   ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
//   ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
//   ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
//   ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
//   ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
//   ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
//   ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
//   ["Zhora Khachatryan", "Example Inc.", "Yerevan", "AM"],
//   ["Gaston Festus", "Example Inc.", "Tampa", "FL"]
// ];

// const PieChartData = [
//   { name: "Admins", value: 20, color: "primary" },
//   { name: "PMs", value: 115, color: "secondary" },
//   { name: "Devs", value: 208, color: "warning" }
// ];

export default function AdminPage(props) {
  // var classes = useStyles();
  // var theme = useTheme();
  return (
    <>
      <PageTitle title="Users" />
      {/* <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="All Members"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                345
              </Typography>
              <div></div>
            </div>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>

              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                xs={6}
              >
                {PieChartData.map(({ name, value, color }, index) => (
                  <Grid item key={index}>
                    <Typography color="text" colorBrightness="color">
                      {name}
                    </Typography>
                    <Typography size="md">{value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Username", "Fullname", "Role", "City", "State"]}
            options={{
              filterType: "checkbox"
            }}
          />
        </Grid>
      
      </Grid> */}
    </>
  );
}
