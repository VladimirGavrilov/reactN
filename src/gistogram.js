import * as d3 from "d3";

const animDuration = 600;

class BarChartVanilla {

    constructor(selector, size) {
        this.size = size;
        this.conatiner = d3.select(selector)
                    .append("svg")
                        .attr("width", size.width)
                        .attr("height", size.height);

        this.scaleColor = d3.scaleSequential(d3.interpolateViridis);
        this.scaleHeight = d3.scaleLinear().range([0, size.height - 20]);
        this.scaleWidth = d3.scaleBand().range([0, size.width]).padding(0.1);
    }

    draw(data) {
        this.scaleColor.domain([0, data.length]);
        this.scaleWidth.domain(data.map((d) => (d.item)));
        this.scaleHeight.domain(d3.extent(data, (d) => (d.count)));

        const bars = this.conatiner
                            .selectAll(".bar")
                            .data(data, function key(d) { return d.item });

        bars.exit()
            .transition().duration(animDuration)
                .attr("y", this.size.height)
                .attr("height", 0)
                .style("fill-opacity", 0)
            .remove();

        bars.enter()
            .append("rect")
                .attr("class", "bar")
                .attr("y", this.size.height)
                .attr("x", this.size.width )
                .attr("rx", 5 ).attr("ry", 5 )
            .merge(bars)
                .transition().duration(animDuration)
                .attr("y", (d) => ( this.scaleHeight(d.count) ))
                .attr("height", (d) => (this.size.height - this.scaleHeight(d.count)) )
                .attr("x", (d, i) => ( this.scaleWidth(d.item) ) )
                .attr("width", this.scaleWidth.bandwidth() )
                .style("fill",  (d, i) => ( this.scaleColor(i) ));
    }
}

export default BarChartVanilla;