import React from "react";
import Search from "./components/Search";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const Peopleli = ({ name, avatarUrl, phoneNumber, jobTitle }) => (
  //Component of List Peoples
  <React.Fragment>
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              variant="body2"
              className="single-people"
              color="textPrimary"
            >
              <Box textAlign="Center" fontWeight="fontWeightBold">
                {phoneNumber}
              </Box>
              <Box textAlign="Left" fontWeight="fontWeightLight">
                {jobTitle}
              </Box>
            </Typography>
          }
        />
        <ListItemAvatar>
          <Avatar alt={name} src={avatarUrl} />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  </React.Fragment>
);

Peopleli.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired
};

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      filtered: [],
      isFetch: true
    };
  }

  //This is de handle of Component search provides by file Search.js
  handleSearch = async search => {
    if (search.length > 2) {
      this.setState({ isFetch: true });
      const response = await fetch(
        "http://localhost:3000/people/by-name/" + search
      );
      const peoplesJson = await response.json();
      return this.setState({ filtered: peoplesJson, isFetch: false });
    }
    this.setState({ filtered: [] });
  };

  //This throw us the people's array from backend server
  async componentDidMount() {
    const response = await fetch("http://localhost:3000/people");
    const peoplesJson = await response.json();
    return this.setState({ peoples: peoplesJson, isFetch: false });
  }

  render() {
    const { isFetch, peoples, filtered } = this.state;
    //This is a function to sort the List of People by the First Name
    function comparar(a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    }
    peoples.sort(comparar);
    if (isFetch) {
      return "Loading...";
    }

    return (
      //This is a return render
      <React.Fragment>
        <Search handleSearch={this.handleSearch} />

        {isFetch && "Loading..."}

        {!isFetch &&
          !peoples.length &&
          "No peoples founded u.u try another search"}
        <section>
          {(filtered.length ? filtered : peoples).map(people => (
            <Peopleli
              name={people.firstName}
              avatarUrl={people.avatarUrl}
              phoneNumber={people.phoneNumber}
              key={people.phoneNumber}
              jobTitle={people.jobTitle}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default People;
