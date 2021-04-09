import React, { useEffect, useState } from "react";
import { userResponseModel } from "../../models/userResponseModel";
import { getUserAxios } from "../../services/userService";
import { Button, Container } from "../components/Button";
import { MediaCard } from "../components/MediaCard";
import { H1, H2 } from "../components/Typography";

const UserPage = () => {
  const [user, setUser] = useState<userResponseModel>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUserAxios();
    console.log(JSON.stringify(data, null, 2));
    setUser(data);
  };

  return (
    <MediaCard>
      {user?.results.map((result) => (
        <div style={{ margin: "3rem" }}>
          <div>
            <img src={result.picture.large} alt={"picture"} />
          </div>
          <div>
            <H1 color="blue">
              Name:{" "}
              {`${result.name.title} ${result.name.first} ${result.name.last}`}
            </H1>
          </div>

          <div>
            <H2>Age:{result.dob.age}</H2>
          </div>

          <Container>
            <div style={{ margin: "1rem" }}>
              <Button onClick={() => alert("Hola")} primary>
                Hi!
              </Button>
            </div>
            <div style={{ margin: "1rem" }}>
              <Button onClick={() => alert("Adios!")} secondary={false}>
                Bye!
              </Button>
            </div>
          </Container>
        </div>
      ))}
    </MediaCard>
  );
};

export default UserPage;
