
<g:applyLayout name="anonlayout">
    <head >
        <meta name="layout" content="main">
        <g:set var="pageHeader" value="${message(code: 'default.dashboard.label', default: 'Dashboard')}"/>
        <title><g:message value="${message(code: 'default.dashboard.label', default: 'Dashboard')}"/></title>


    </head>
    <content tag="main-content">


        <div class="row">
            <div class="col-md-10 col-md-offset-1 ">
                %{--<div class="card" style="padding: 20px 20px;">--}%
                    <div class="title" style="color: black;">
                        <h2 class="title" style="text-align: center;color: black;">Digital repository</h2>
                    </div>
                    <h5 class="description" style="text-align: justify;color: black;">
                        <p>
                            The main objective of the Project is to prepare a classified, Electronic Master descriptive catalogue Ancient Manuscripts and Books on Yoga. This will serve as a ready-reckoner for accessing information about any book / manuscript on Yoga, and one can immediately (at the click of button) locate the same based on many parameters such as the type of yoga it deals with, language, type of work (commentary / sub-commentary etc.), type of work (original work / translation etc. and also poetry / prose / combination of both etc.) published / unpublished etc.
                            However, this will only give information ‘about’ the work only. On the other hand it would be even better if the end-user of the project would be able to ‘access’ the work itself. From this point of view, it was decided to also expand the scope of the project (without asking for additional financial resources from the Ministry of AYUSH) and make a digital repository of those books and manuscripts. This would go a long way in helping scholars, researchers, students and practitioners of Yoga to access thousands of works from any location in the world. Presently available knowledge shows us that digital copies of such a large number of works are not available at a single location (either online or any physical library also).
                        </p>
                        <p class="bold" style="font-weight: bold;color: maroon;">
                            Further, in the original proposal, it was proposed to document only manuscripts and books; however, there are hundreds of articles also that contain invaluable information about various aspects of Yoga. These articles, which are authored by stalwarts in the theory and practice of Yoga also have not been properly and exhaustively indexed or digital copies made available online. Therefore, it was decided to expand the scope of the project to include the cataloguing, digitization and other allied tasks to articles also and thus add value to the output of the project. This is another value addition, which was not initially envisaged, made to the project.
                        </p>
                    </h5>

                %{--</div>--}%
            </div>
        </div>

    </content>
</g:applyLayout>