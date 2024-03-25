"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Badge} from "@nextui-org/react";
import {columns, users} from "./data"

export default function OnlineFriends(){
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user["name"];
        return (
          <Badge color="success" isOneChar={true} size="sm" placement="bottom-left">
            <User
              avatarProps={{radius: "sm", src: user.avatar}}
              description={user.email}
              name={cellValue}
            >
              {user.email}
            </User>
          </Badge>
        );
    }, []);
    return (
        <Table 
          className="w-[22rem] fixed right-10 top-[19%]"
          isCompact
          isHeaderSticky
        >
            <TableHeader 
              columns={columns}
            >
                {(column) => (
                    <TableColumn className="w-[10%]" key={column.uid} align={column.uid === "status" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No rows to display."} items={users}>
                {(item) => (
                <TableRow key={item.id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
    );
}