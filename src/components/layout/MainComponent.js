import React from 'react';

class MainComponent extends React.Component {

    render() {
        return (            
            <div className="main">
                <h1 align="center">TECH3S Web Application Skeleton using React, Redux and REST APIs</h1>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <span><b>1> Frontend</b></span><br/>
                            <ul>
                                <li>UI: <b>react</b></li>
                                <li>Routing: <b>react-router-dom</b></li>
                                <li>History: <b>this.props.history</b>(stateful components), <b>useHistory</b>(stateless components)</li>
                                <li>State Management: <b>redux</b> (based on <b>Flux Architecture</b>), <b>react-redux</b></li>
                                <li>Store Persisting: <b>redux-persist</b></li>
                                <li>Middleware: <b>redux-thunk</b> (Async Action)</li>
                                <li>Http Client: <b>axios</b></li>
                                <li>Web Server: <b>Apache httpd</b>(client-side rendering), <b>Nodejs</b>(server-side rendering)</li>
                                <li>Development Tools: <b>VS Code, Nodejs, yarn, create-react-app</b></li>
                            </ul>
                        </td>
                        <td>
                            <span><b>2> Backend</b></span><br/>
                            <ul>
                                <li>REST APIs: <b>Spring REST</b></li>
                                <li>JSON Prossessing: <b>GSON</b></li>
                                <li>Object Mapping: <b>Model Mapper</b></li>
                                <li>Logging: <b>Slf4j, Logback</b></li>
                                <li>Security: <b>Spring Security, JSON Web Token - JWT</b></li>
                                <li>Business Transaction: <b>Spring Transaction</b></li>                    
                                <li>Object-Relational Mapping - ORM: <b>Hibernate</b></li>
                                <li>Database: <b>MySQL</b></li>
                                <li>Web Server: <b>Embedded Jetty</b></li>
                                <li>Development Tools: <b>IntelliJ, JDK, Maven, Spring Boot</b></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span><b>3> DevOps</b></span><br/>
                            <ul>
                                <li>Web/Application Servers: <b>AWS (Amazon Web Services) EC2</b></li>
                                <li>Cache Server: <b>Redis</b> (on AWS EC2)</li>
                                <li>File Server: <b>AWS S3</b></li>
                                <li>CI/CD (Continuous Integration/Delivery) Server: <b>Jenkins</b> (on AWS EC2)</li>
                            </ul>
                        </td>
                        <td>
                            <span><b>4> Design Note (based on "4+1 Views" model)</b></span><br/>
                            <ul>
                                <li>Logical View: <b>Domain Model, State Diagrams</b></li>
                                <li>Process View: <b>Flow Charts, Activity Diagrams</b></li>
                                <li>Development View: <b>Component Diagram, Architecture Diagrams</b></li>
                                <li>Physical View: <b>Deployment Diagram</b></li>
                                <li>Scenario View: <b>Features/User Stories</b></li>
                                <li><b>Software Requirement Specification - SRS</b> (links to those above)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default MainComponent;