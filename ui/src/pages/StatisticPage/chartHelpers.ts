export const dark = {
    backgroundColor: "#161D26",
    textStyle: {
        color: "#FFFFFF",
    },
    title: {
        textStyle: {
            color: "#FFFFFF",
        },
    },
    legend: {
        textStyle: {
            color: "#FFFFFF",
        },
        inactiveColor: "#C3CDDB",
    },
    tooltip: {
        textStyle: {
            color: "#FFFFFF",
        },
        backgroundColor: "hsla(0, 43%, 5%, 0.5)",
    },
    emphasis: {
        label: {
            fontSize: 40,
            fontWeight: "bold",
            color: "#FFFFFF",
        },
    },
};

export const light = {
    backgroundColor: "#C3CDDB",
    textStyle: {
        color: "#000000",
    },
    title: {
        textStyle: {
            color: "#000000",
        },
    },
    legend: {
        textStyle: {
            color: "#000000",
        },
        inactiveColor: "#161D26",
    },
    tooltip: {
        textStyle: {
            color: "#FFFFFF",
        },
        backgroundColor: "hsla(0, 43%, 5%, 0.5)",
    },
    emphasis: {
        label: {
            fontSize: 40,
            fontWeight: "bold",
            color: "#000000",
        },
    },
};

export function formatter(params: any) {
    return `<div class="chart-tooltip-item">
        <p>${params[0].axisValueLabel}: ${params.reduce((acc: number, param: any) => (
            acc + param.value
        ), 0)}</p>
        ${params.map((param: any) => (
            `<p>${param.seriesName}: ${param.value}</p>`
        )).join("")}
    </div>`;
}