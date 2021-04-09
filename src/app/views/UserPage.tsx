import React, { useEffect, useState } from "react";
import { userResponseModel } from "../../models/userResponseModel";
import { getUserAxios } from "../../services/userService";
import { Button, Container } from "../components/Button";
import { MediaCard } from "../components/MediaCard";
import { H1, H2 } from "../components/Typography";
import { BoxMedia } from "../components/BoxMedia";

const UserPage = () => {
  const [userResponse, setUserResponse] = useState<userResponseModel>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUserAxios();
    console.log(JSON.stringify(data, null, 2));
    setUserResponse(data);
  };

  return (
    <MediaCard>
      {userResponse?.results.map((result, index) => (
        <BoxMedia>
          <div style={{ margin: "3rem" }} key={result.email}>
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
              <H2>Age: {result.dob.age}</H2>
            </div>

            <Container>
              <div style={{ margin: "1rem" }}>
                <Button
                  onClick={() => {
                    const index = userResponse?.results.indexOf(result);
                    userResponse?.results.splice(index, 1);
                    setUserResponse({ ...userResponse });
                  }}
                  primary
                >
                  Hi!
                </Button>
              </div>

              <div style={{ margin: "1rem" }}>
                <Button
                  onClick={() => {
                    userResponse.results = userResponse?.results?.filter(
                      (r) => {
                        console.log("R::", r);
                        return r.id !== result.id;
                      }
                    );

                    setUserResponse({ ...userResponse });
                  }}
                  secondary={false}
                >
                  Bye!
                </Button>
              </div>
            </Container>
          </div>
        </BoxMedia>
      ))}
    </MediaCard>
  );
};

export default UserPage;
