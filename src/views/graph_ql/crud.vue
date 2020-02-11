<template>
  <div class="crud__container">
    <is-loader></is-loader>
    <header class="crud__header">
      <h1>1.GraphQL CRUD</h1>
    </header>
    <main>
      <section>
        <div>데이터</div>
        <p>- 만약 이런 데이터가 있다면</p>
        <code-block>
          <pre>

              let links = [
                    {
                        id: "link",
                        no: 0,
                        name: "aaa"
                    },
                    {
                        id: "link-1",
                        no: 1,
                        name: "aaa"
                    }
                ];
          </pre>
        </code-block>
      </section>
      <section>
        <h4>1-1 데이터 읽기</h4>
        <div>
          <p>type Query 부분은 실제로 나중에 query 작성시 사용되는 형태를 정의 하는 것 같다.</p>
          <div>
            <code-block>
              <pre>
                ~Query~
              
                type Query {
                    info: String!
                    feed: [Link!]!
                    link(id: ID!): Link
                }
                type Link {
                    id: ID!
                    no: Int!
                    name: String!
                }

                let noCount = links.length;

                ~resolvers~

                const resolvers = {
                    Query: {
                        info: () => `test`,
                        feed: () => links,
                        link: (parent, args) => {
                        const search = {
                            obj: ""
                        };
                        links.forEach(e => {
                            if (args.id === e.id) {
                            search.obj = e;
                            }
                        });
                        return search.obj;
                        }
                    }
                };
                </pre>
            </code-block>
          </div>
          <div>
            <code-block :mode="'active'">
              <pre>

                query {
                    info
                }

                query {
                    feed {
                        id
                        no
                        name
                    }
                }

                query {
                    link(id: "link") {
                        id
                        no
                        name
                    }
                }
                </pre>
            </code-block>
          </div>
        </div>
      </section>

      <section>
        <h4>1-2 데이터 추가</h4>
        <div>
          <code-block>
            <pre>

                type Mutation {
                    post(id: String!, name: String!): Link
                }
            </pre>
          </code-block>
        </div>
        <div>
          <code-block>
            <pre>

                Mutation: {
                    post: (parent, args) => {
                    const link = {
                        id: args.id,
                        no: noCount++,
                        name: args.name
                    };
                    links.push(link);
                    return link;
                    }
                }
            </pre>
          </code-block>
        </div>
        <div>
          <code-block :mode="'active'">
            <pre>

                mutation {
                    post(id:"a-1",name:"a--1") {
                        no
                        id
                        name
                    }
                }
            </pre>
          </code-block>
        </div>
      </section>
      <section>
        <h4>1-3 데이터 수정</h4>
        <div>
          <code-block>
            <pre>

                type Mutation {
                    post(id: String!, name: String!): Link
                    update(id: ID!, name: String!): Link
                }
            </pre>
          </code-block>
        </div>
        <div>
          <code-block>
            <pre>

                Mutation: {
                    post: (parent, args) => {
                    const link = {
                        id: args.id,
                        no: noCount++,
                        name: args.name
                    };
                    links.push(link);
                    return link;
                    },
                    update: (parent, args) => {
                    const update = {
                        obj: ""
                    };
                    links.forEach(target => {
                        if (args.id === target.id) {
                        update.obj = Object.assign(target, args);
                        }
                    });
                    return update.obj;
                    }
                }
            </pre>
          </code-block>
        </div>
        <div>
          <code-block :mode="'active'">
            <pre>

                mutation {
                    update(id: "link", name:"zzz???!!!!!!!!!!") {
                        id
                        no
                        name
                    }
                }
            </pre>
          </code-block>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import isLoader from "@/components/common/loader/index.vue";
import CodeBlock from "@/components/code-block/index.vue";
import { Mutation, namespace } from "vuex-class";

@Component({
  components: {
    isLoader,
    CodeBlock
  }
})
export default class graphqlCrudPage extends Vue {
  @Mutation("loaderInit", { namespace: "loaderModule" })
  loaderInit!: any;
  @Mutation("loaderDisplayShow", { namespace: "loaderModule" })
  loaderDisplayShow!: any;

  created() {
    this.init();
  }

  @Emit()
  init() {
    this.loaderInit();
  }

  mounted() {
    setTimeout(() => {
      this.loaderDisplayShow();
    }, 1000);
  }
}
</script>
<style lang="scss" scoped>
.crud__container {
  width: 100%;
  height: 100%;
  .crud__header {
    width: 100%;
    height: 100%;
    font-size: 15pt;
  }
}
</style>