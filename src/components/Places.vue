<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <table class="table table-striped">
          <tbody>
            <tr v-for="place in places" :key="place.id">
              <td>
                {{ place.title }} // {{place.id}} // {{place.position}} // {{place.category}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase';
  export default {
    name: 'Places',
    firestore: {
        places: db.collection('test-places'),
    },
    data(){
      return {
        places: [],
      }
    },
    methods: {
    }
  }
</script>