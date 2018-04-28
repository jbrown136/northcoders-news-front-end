componentDidMount () {
    dataSource.addChangeListener(this.handleChange)

}
componenWillUnmount () {
    dataSource.removeChangeListener(this.handleChange)
}
handleChange() {
    this.setState({
        data: dataSource.getData
    })
}