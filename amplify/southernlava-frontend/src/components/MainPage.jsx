import React, {useEffect, useState} from "react";
import {getPoolPlaceData} from "../services/getPoolPlaceData";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const MainPage = () => {
    const data = [
        {teamId: 1, teamName: "Dragons", wins: 10, losses: 5, pointsDiff: 20, total: 15},
        // ... other data objects
    ]
    const [teams, setTeams] = useState([])
    teams.pointsDiff = undefined;
    teams.place = undefined;
    teams.wins = undefined;

    useEffect(() => {
        getPoolPlaceData().then((response) => {
            setTeams(response.data);

        }).catch((err) => {
            console.error(err);
        })

    }, [])
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Team Id</TableCell>
                            <TableCell>Team Name</TableCell>
                            <TableCell>Wins</TableCell>
                            <TableCell>Losses</TableCell>
                            <TableCell>Point Differentials</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.teamId}>
                                <TableCell>{item.teamId}</TableCell>
                                <TableCell>{item.teamName}</TableCell>
                                <TableCell>{item.wins}</TableCell>
                                <TableCell>{item.losses}</TableCell>
                                <TableCell>{item.pointsDiff}</TableCell>
                                <TableCell>{item.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>


    )
}
export default MainPage;