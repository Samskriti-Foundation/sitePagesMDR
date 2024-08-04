
<g:applyLayout name="anonlayout">
    <head >
        <meta name="layout" content="main">
        <g:set var="pageHeader" value="${message(code: 'default.dashboard.label', default: 'Dashboard')}"/>
        <title><g:message value="${message(code: 'default.dashboard.label', default: 'Dashboard')}"/></title>


    </head>
    <content tag="main-content">


        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                %{--<div class="card" style="padding: 20px 20px;">--}%
                    <div class="title" style="color: black;">
                        <h2 class="title" style="text-align: center;color: black;">Achievements of the Project</h2>
                    </div>
                    <h5 class="description" style="text-align: justify;color: black;">
                       <p>
                           Information about around 5000 documents -  2726 books, 2285 manuscripts and 590 articles has been collected and uploaded into the database. Most of the documents also contain summary, Table of contents, author and publication details and images wherever applicable and available.
                       </p>
                        <p>As a part of this, a scheme of classification has been finalized and implemented.</p>
                        <p style="font-weight: bold;color: maroon;">A user-friendly, attractive website, having easy navigation facilities containing details of around 5600 documents (manuscripts / books / articles) on YOGA with basic search facilities like Name of the work / Author / Topic / sub-categories etc. is achieved.</p>
                        <p style="font-weight: bold;color: maroon;">This has been made available online and currently available at the concerned website</p>
                    </h5>

                %{--</div>--}%
            </div>
        </div>

    </content>
</g:applyLayout>