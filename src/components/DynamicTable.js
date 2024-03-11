import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import _ from "lodash";

export default function DataTable(data) {
    const allKeys = _.union(...data?.data.map((obj) => _.keys(obj)));

    const columns = allKeys.map((key) => {
        return {
            field: key,
            headerName: _.startCase(key),
            // Additional properties as needed
        };
    });

    const rows = data.data.map((obj, index) => ({
        id: index + 1, // Add an ID field for each row
        ...obj,
    }));

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 100 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}
