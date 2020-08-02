import React from 'react';
import TopMenu from './components/TopMenu.jsx';
import Banner from './components/Banner.jsx';
import Card from './components/Card.jsx';
import GetInTouchBar from './components/GetInTouchBar.jsx';
import Article from './components/Aricle/Article.jsx';
import ArticleIntro from './components/Aricle/ArticleIntro.jsx';
import ArticleParagraph from './components/Aricle/ArticleParagraph.jsx';
import ArticleQuote from './components/Aricle/ArticleQuote.jsx';
import ClientLogin from './components/ClientLogin.jsx';
import Footer from './components/Footer.jsx';
import Copyright from './components/Copyright.jsx';

function App() {
  return (
    // Also container, row, col could be moved and used as a component
    <div id="devbridge-home-task">
      <TopMenu />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <Card title="BRANDING IDENTITY">
              Repurpose professionally accurate initiatives without ubiquitous deliverables. Energistically engineer resource maximizing quality.
            </Card>
          </div>
          <div className="col-md-4 col-sm-6">
            <Card title="WEB DESIGN">
              Progressively reintermediate market positioning partnerships whereas visionary content.
            </Card>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card className="inverse" title="APP DEVELOPMENT">
              Supply efficient integrated architectures with unique best practices. Assertively strategize pandemic sources.
            </Card>
          </div>
          <div className="col-md-8">
            <Article date="12:50 13 Oct 2020" title="Simplicity is the ultimate sophistication">
              <ArticleIntro>
                Customize interactively distributed data whereas strategic value. Compellingly engineer world-class resources through optimal mindshare. Uniquely incubate client-centered deliverables through market-driven strategic theme.
              </ArticleIntro>
              <ArticleParagraph>
                Seize value-added architectures for clicks-and-mortar e-services. Conveniently pontificate ethical partnerships for prospective schemas. Interactively generate client-centered "outside the box" thinking for innovative vortals. Efficiently engineer e-business leadership skills rather than bricks-and-clicks resources. Compellingly enhance quality e-tailers via extensive e-business.Compellingly innovate global paradigms whereas cross functional benefits. Assertively foster performance based imperatives without sustainable models. Enthusiastically reintermediate client-based human capital after excellent.
              </ArticleParagraph>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 pl-0">
                    <ArticleParagraph>
                      Incubate fully tested expertise after interactive services. Objectively scale stand-alone partnerships vis-a-vis market positioning quality vectors. Dramatically fabricate extensive human capital without parallel infomediaries. Energistically promote error-free quality vectors whereas.
                    </ArticleParagraph>
                  </div>
                  <div className="col-md-6 pr-0">
                    <ArticleParagraph>
                      Extend team driven innovation through premier infrastructures. Completely formulate principle-centered functionalities through granular relationships. Competently restore client-centric functionalities via functional leadership.
                    </ArticleParagraph>
                  </div>
                </div>
              </div>
              <ArticleQuote author="Don Norman">
                It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.
              </ArticleQuote>
              <ArticleParagraph>
                Competently unleash enterprise materials before B2C innovation. Intrinsicly deploy viral models whereas client-centric resources. Objectively foster emerging channels through stand-alone content. Enthusiastically recaptiualize granular core competencies whereas progressive e-markets. Objectively re-engineer distinctive total linkage without cross-media process improvements. Uniquely formulate unique supply chains with end-to-end internal or "organic" sources. Intrinsicly synergize transparent.
              </ArticleParagraph>
            </Article>
          </div>
          <div className="col-md-4">
            <ClientLogin />
          </div>
          <div className="col-md-12">
            <GetInTouchBar />
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
