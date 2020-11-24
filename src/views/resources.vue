<template>
  <div class="my-5">
    <b-container>
      <h1 class="mb-4">Articles</h1>
      <b-row>
        <b-col lg="12">
          <b-card-group columns>
            <div v-for="resource in resources" :key="resource.url">
                <b-card 
                  :title="resource.author" 
                  bg-variant="light" 
                  class="mb-4" 
                >
                  <b-card-text>
                    <p>{{resource.title}}</p>
                  </b-card-text>
                  <template #footer>
                    <small class="text-muted"><a :href="resource.url" target="_blank">More</a></small>
                  </template>
                </b-card>
            </div>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'resources',
  data: function () {
    return {
      resources: [
        {
          author: 'FDA',
          title: 'Emergency Use Authorization (EUA) information, and list of all current EUAs',
          url: 'https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization#covidinvitrodev',
        },
        {
          author: 'FDA',
          title: 'Approvals of FDA-Regulated Products.',
          url: 'https://www.fda.gov/news-events/approvals-fda-regulated-products',
          img: 'https://www.fda.gov/media/99806/download'
        },
        {
          author: 'CDC',
          title: 'CDC COVID Data Tracker: Maps, charts, and data provided by the CDC.',
          url: 'https://covid.cdc.gov/covid-data-tracker/#cases_casesper100klast7days',
        }
      ]

    }
  },
}
</script>

<style scoped>
  .card-body {
    min-height: 150px;
  }
  .card-footer {
    background-color: #f8f9fa;
    border-top: none;
  }
</style>