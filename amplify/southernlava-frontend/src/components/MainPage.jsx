import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(teams, teamName, wins, losses, pointDifferential, total, place) {
    return {teams, teamName, wins, losses, pointDifferential, total, place };
}

const rows = [
    createData('Team 1','ZTV 18 Meyer', 'IIII', 'II', '7 12 11 16 -16 -5', 25, 2),
    createData('Team 2','Bonneville', 'IIIIII', '', '12 10 8 18 16 5', 69, 1),
    createData('Team 3','Show Muzzy', 'II', 'IIII', '-7 -12 -8 -18 -10 12', -23, 3),
    createData('Team 4','Elite Lynns', '', 'IIIIII', '-12 -10 -11 -16 -10 -12', -71, 4),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Southern LA VolleyBall Association">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Teams</TableCell>
                        <TableCell align="right">Team Name</TableCell>
                        <TableCell align="right">Wins</TableCell>
                        <TableCell align="right">Losses</TableCell>
                        <TableCell align="right">Point Differential</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.teams}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.teams}
                            </TableCell>
                            <TableCell align="right">{row.teamName}</TableCell>
                            <TableCell align="right">{row.wins}</TableCell>
                            <TableCell align="right">{row.losses}</TableCell>
                            <TableCell align="right">{row.pointDifferential}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            <TableCell align="right">{row.place}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}