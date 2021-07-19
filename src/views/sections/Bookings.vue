<template>
  <div 
    id="about-page"  
    class="my-10"
  >
    <v-container >
      <v-spacer></v-spacer>
      <div>

             <v-alert
             v-model="c"
              color="primary"
              dismissible
              text
               elevation="14"
              type="success"
            >

            Consulta eliminada com sucesso ! 
            </v-alert>
           </div>
     <v-row no-gutters>
        <v-col
            cols="12"
            md="12"
            xl="12"
        >
      <h1 class="text-center display-3 my-3"> Pedido de marcação </h1>
        </v-col>
     </v-row>
      <v-row no-gutters>
        <v-col
            cols="12"
            md="12"
            class="pa-2"
        >
          <v-card
            class="mx-auto"
            outlined
            elevation="10"
          >
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step
                  :complete="e1 > 1"
                  step="1"
                >
                  Tipo de marcação
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="e1 > 2"
                  step="2"
                >
                  Horário
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="e1 > 3"
                  step="3">
                  Dados pessoais
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step 
                :complete="e1 > 4"
                step="4">
                  Quadro clinico
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step 
                step="5">
                  Confirmação 
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                 
                    <div class="intro-info mb-16">
                      <v-alert
                        icon="mdi-information-outline"
                        
                        border="left"

                        text
                        type="info"
                      >
                        <p>Preencha o formulário e aguarde a nossa confirmação.</p>
                        <p>Todos os campos são de preenchimento obrigatório, exceto os assinalados com “opcional”.</p>
                      </v-alert>
                    </div>
                    <h2 
                      class="display-1 v-subtitle mt-6 mb-3 font-weight-light"
                    >
                      O que pretende marcar?
                    </h2>
                    <v-tabs id="servicemenu" class="display-3 mb-4">
                      <v-tab @click="modal_1=true, modal_2=false">Massagens</v-tab>
                      <v-tab @click="modal_2=true, modal_1=false">Reabiltação Física</v-tab>
                      
                    </v-tabs>
                    <div id="vue">
                      <div>
                        <div class="c-modal" v-if="modal_1">
                          
                            <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                              >
                                <h3
                                  class=" mt-6 mb-3 font-weight-medium"
                                >
                                  Centro / Clinica:
                                </h3>
                                <v-select
                                v-model="centermassage"
                                  :items="items"
                                  label="Selecione uma opção"
                                  outlined
                                ></v-select>
                                
                              </v-col>
                            </v-row>

                            <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                              >
                                <h3
                                  class=" mb-3 font-weight-medium"
                                >
                                  Massagem:
                                </h3>
                                <v-select
                                v-model="servicemassage "
                                :items="massages"
                                  label="Selecione a massagem"
                                  outlined
                                >
                                
                                </v-select>
                              </v-col>
                            </v-row>
                          
                          
                        </div>
                        <!--<div class="bg" v-show="modal_1" v-on:click="modal_1=!modal_1"></div>-->
                      </div>
                      <div>
                        <div class="c-modal" v-if="modal_2">
                        <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                              >
                                <h3
                                  class=" mt-6 mb-3 font-weight-medium"
                                >
                                  Centro / Clinica:
                                </h3>
                                <v-select
                                v-model="centerrehab"
                                :items="items"
                                  label="Selecione uma opção"
                                  outlined
                                >
                                </v-select>
                              </v-col>
                            </v-row>

                             <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                              >
                                <h3
                                  class="mb-3 font-weight-medium"
                                >
                                  Reabilitação Física:
                                </h3>
                                <v-select
                                v-model="servicerehab"
                                :items="rehabilitations"
                                  label="Selecione a massagem"
                                  outlined
                                >
                                </v-select>
                              </v-col>
                            </v-row>
                          
                        </div>
                      </div>
                    
                    </div>


                  <!--<v-btn text>
                    Voltar
                  </v-btn>-->
                  <v-btn
                    color="primary"
                    @click="e1 = 2"
                  >
                    Continuar
                  </v-btn>

                 
                </v-stepper-content>

                <v-stepper-content step="2">
                 <div class="intro-info mb-16">
                      <v-alert
                        icon="mdi-information-outline"
                        
                        border="left"

                        text
                        type="info"
                      >
                        <p>Preencha o formulário e aguarde a nossa confirmação.</p>
                        <p>Todos os campos são de preenchimento obrigatório, exceto os assinalados com “opcional”.</p>
                      </v-alert>
                    </div>
                    <h2 
                      class="display-1 v-subtitle mt-6 mb-3 font-weight-light"
                    >
                      Para quando pretende marcar?
                    </h2>

                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <h3
                          class=" mt-6 mb-3 font-weight-medium"
                        >
                          Marcar a partir de (opcional):
                        </h3>
                        
                        <v-date-picker 
                          format="DD-MM-YYYY"
                            elevation="4"
                            class="ml-4 mb-6"
                          color="primary" 
                          v-model="pickerfrom" 
                          :min="new Date().toISOString().slice(0, 10)"
                          >
                        </v-date-picker>
                      </v-col>
                    </v-row>


                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <h3
                          class=" mt-3  font-weight-medium"
                        >
                          Dias da semana que prefere (opcional):
                        </h3>
                        <v-alert
                        icon="mdi-information-outline"
                        class="mb-0"
                        border="left"
                        dense
                        text
                        type="info"
                      >
                        Recomendamos que selecione vários dias. 
                        Algunss serviços podem não ser realizados todos os dias.    
                      </v-alert>
                      </v-col>
                      
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="8" 
                      >
                        <v-row>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="3" xl="3"
                      >

                       
                        <v-checkbox
                          v-model="selecteddays"
                          label="2ª Feira"
                          value="segunda"
                        ></v-checkbox>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="3" xl="3"
                      >
                        <v-checkbox
                          v-model="selecteddays"
                          label="3ª Feira"
                          value="terça"
                        ></v-checkbox>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="3" xl="3"
                      >
                        <v-checkbox
                          v-model="selecteddays"
                          label="4ª Feira"
                          value="quarta"
                        ></v-checkbox>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="3" xl="3"
                      >
                       
                        <v-checkbox
                          v-model="selecteddays"
                          label="5ª Feira"
                          value="quinta"
                        ></v-checkbox>

                        </v-col>
                        <v-col
                        cols="12"
                        sm="6" md="4" lg="3" xl="3"
                      >
                       
                        <v-checkbox
                          v-model="selecteddays"
                          label="6ª Feira"
                          value="sexta"
                        ></v-checkbox>

                        </v-col>
                        
                        <v-col
                        cols="12"
                        sm="6" md="4" lg="3" xl="3" 
                      >
                        <v-checkbox
                          v-model="selecteddays"
                          label="Sabado"
                          value="sabado"
                        ></v-checkbox>

                        </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4" lg="4" xl="3"
                      >
                        <v-checkbox
                          v-model="selecteddays"
                          label="Domingo"
                          value="domingo"
                        ></v-checkbox>

                        </v-col>
                        
                       
                        </v-row>

                      </v-col>
                      
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <h3
                          class=" mt-3  font-weight-medium"
                        >
                          Períodos do dia que prefere (opcional):
                        </h3>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="8" 
                      >
                        <v-row>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="4" xl="3"
                      >

                        <v-checkbox
                          v-model="selectedhours"
                          label="Manhã (10h-12h)"
                          value="Manhã (10h-12h)"
                        ></v-checkbox>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="4" xl="4"
                      >
                        <v-checkbox
                          v-model="selectedhours"
                          label="Almoço (12h-14h)"
                          value="Almoço (12h-14h)"
                        ></v-checkbox>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="4" xl="3"
                      >
                        <v-checkbox
                          v-model="selectedhours"
                          label="Tarde (14h-18h)"
                          value="Tarde (14h-18h)"
                        ></v-checkbox>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6" md="4" lg="4" xl="3"
                      >
                       
                        <v-checkbox
                          v-model="selectedhours"
                          label="Noite (18h-22h)"
                          value="Noite (18h-22h)"
                        ></v-checkbox>

                        </v-col>
                        </v-row>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <h3
                          class=" mt-3  font-weight-medium"
                        >
                          Observações (opcional)
                        </h3>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-textarea
                        outlined
                        :rules="rules"
                        name="input-7-4"
                        label="Escreva aqui as suas notas"
                        counter="500"
                        value=""
                      ></v-textarea>
                      </v-col>
                    </v-row>
                  
                  <v-btn @click="e1 = 1" text>
                    Voltar
                  </v-btn>
                  <v-btn
                    color="primary"
                    @click="e1 = 3"
                  >
                    Continuar
                  </v-btn>

                  
                </v-stepper-content>

                <v-stepper-content step="3">
                  <div class="intro-info mb-16">
                      <v-alert
                        icon="mdi-information-outline"
                        border="left"
                        text
                        type="info"
                      >
                        <p>Preencha o formulário e aguarde a nossa confirmação.</p>
                        <p>Todos os campos são de preenchimento obrigatório, exceto os assinalados com “opcional”.</p>
                      </v-alert>
                    </div>
                    <h2 
                      class="display-1 v-subtitle mt-6 mb-3 font-weight-light"
                    >
                      Dados do utente
                    </h2>
             

                    <v-form v-model="valid" class="valid">

                    <v-row>
                          
                          <v-col
                          cols="12"
                          md="4"
                          class="py-2"
                          >
                              <v-text-field
                            outlined
                              ref="firstname"
                              v-model="firstname"
                              :rules="[
                                () => !!firstname || 'Este campo é obrigatório',
                                () => !!firstname && firstname.length <= 20 || 'O nome deve ser inferior a 20 caracteres',
                              ]"
                              label="Nome"
                              prepend-icon="person"
                              required
                              dense
                            ></v-text-field>
                          </v-col>
                          <v-col
                          class="py-2"
                          cols="12"
                          md="4"
                          >    
                            <v-text-field
                            outlined
                              ref="surname"
                              v-model="surname"
                              :rules="[
                                () => !!surname || 'Este campo é obrigatório',
                              ]"
                              label="Aplido / Sobrenome"
                              prepend-icon="person"
                              required
                              dense
                            ></v-text-field>
                          </v-col>

                          <v-col
                          class="py-2"
                          cols="12"
                          md="4"
                          >    
                            <v-text-field
                              v-model="email"
                              label="Email"
                              name="Email"
                              readonly
                              prepend-icon="email"
                              type="text"
                              color="primary"
                              outlined
                              dense
                            ></v-text-field>
                          </v-col>
                          <v-col
                          class="py-2"
                          cols="12"
                          md="4"
                          >    
                            <v-text-field
                              v-model="birth"
                              label="Data de Nascimento"
                              name="birth"
                              readonly
                              prepend-icon="mdi-calendar"
                              type="text"
                              color="primary"
                              outlined
                              ref="birth"
                              dense
                            ></v-text-field>
                          </v-col>
                          <v-col
                          class="py-2"
                          cols="12"
                          md="4"
                          >
                              <v-text-field
                              outlined
                              ref="telemovel"
                              v-model="telemovel"
                              :rules="[
                                () => !!telemovel || 'Este campo é obrigatório',
                                () => !!telemovel && telemovel.length <= 9 || 'O número deve conter 9 dígitos',
                                () => !!telemovel && telemovel.length >= 9 || 'O número deve conter 9 dígitos',
                              ]"
                              type="number"
                              label="Telemóvel"
                              counter="9"
                              prepend-icon="call"
                              required
                              dense
                            ></v-text-field>
                          </v-col>
                      </v-row>
                    </v-form>
                 
                      
                  
                  <v-btn @click="e1 = 2" text>
                    Voltar
                  </v-btn>

                  <v-btn
                    color="primary"
                    @click="e1 = 4"
                    :disabled="!valid"
                  >
                    Continuar
                  </v-btn>

                  
                </v-stepper-content>

                      <v-stepper-content step="4">
                  <div class="intro-info mb-16">
                      <v-alert
                        icon="mdi-information-outline"
                        border="left"
                        text
                        type="info"
                      >
                        <p>Preencha o formulário e aguarde a nossa confirmação.</p>
                        <p>Todos os campos são de preenchimento obrigatório, exceto os assinalados com “opcional”.</p>
                      </v-alert>
                    </div>
                    <h2 
                      class="display-1 v-subtitle mt-6 mb-3 font-weight-light"
                    >
                      Quadro clinico 
                    </h2>

                    <v-row>
                      <v-col
                        cols="12"
                        md="12">
                        <v-row>
                          <v-col
                            cols="12"
                            md="6">

                              <h3
                                class=" mt-6 font-weight-medium"
                              >
                                Dores: 
                              </h3>
                              <v-radio-group
                                v-model="rdores"
                                row
                                :rules="[rules.required]"
                                class="mt-1"
                                >
                                <v-radio
                                    label="Sim"
                                    value="Sim"
                                ></v-radio>
                                <v-radio
                                    label="Não"
                                    value="Não"
                                ></v-radio>
                                </v-radio-group>
                              <h3
                                class="font-weight-medium"
                              >
                                Se sim: 
                              </h3>
                             

                              <v-row>

                              
                                <v-col
                                cols="12"
                                md="6"
                                >
                                  <v-text-field
                                    outlined
                                      ref="dorlocal"
                                      v-model="dorlocal"
                                      label="Localização"
                                      required
                                      dense
                                    ></v-text-field>
                                </v-col>
                                
                                <v-col
                                cols="12"
                                md="6"
                                >
                                    <v-text-field
                                    outlined
                                      ref="dorduracao"
                                      v-model="dorduracao"
                                      label="Duração"
                                      required
                                      dense
                                    ></v-text-field>
                                </v-col>
                              </v-row>

                              <h3
                                class=" mt-6 font-weight-medium"
                              >
                                Cansaço muscular: 
                              </h3>
                              <v-radio-group
                                v-model="rcans"
                                row
                                :rules="[rules.required]"
                                class="mt-1"
                                >
                                <v-radio
                                    label="Sim"
                                    value="Sim"
                                ></v-radio>
                                <v-radio
                                    label="Não"
                                    value="Não"
                                ></v-radio>
                                </v-radio-group>


                                <h3
                                class=" mt-6 font-weight-medium"
                              >
                                Alergias: 
                              </h3>
                              <v-radio-group
                                v-model="ralergias"
                                row
                                :rules="[rules.required]"
                                class="mt-1"
                                >
                                <v-radio
                                    label="Sim"
                                    value="Sim"
                                ></v-radio>
                                <v-radio
                                    label="Não"
                                    value="Não"
                                ></v-radio>
                                </v-radio-group>
                              <h3
                                class="font-weight-medium"
                              >
                                Se sim: 
                              </h3>

                              <v-row>

                              
                                <v-col
                                cols="12"
                                md="6"
                                >
                                  <v-text-field
                                    outlined
                                      ref="alergias"
                                      v-model="alergias"
                                      label="Quais?"
                                      required
                                      dense
                                    ></v-text-field>
                                </v-col>
                              </v-row>

                              <h3
                                class=" mt-6 font-weight-medium"
                              >
                                Ansiedade: 
                              </h3>
                              <v-radio-group
                                v-model="ransiedade"
                                row
                                :rules="[rules.required]"
                                class="mt-1"
                                >
                                <v-radio
                                    label="Sim"
                                    value="Sim"
                                ></v-radio>
                                <v-radio
                                    label="Não"
                                    value="Não"
                                ></v-radio>
                                </v-radio-group>
                              

                              <h3
                                class=" mt-6 font-weight-medium"
                              >
                                Patologias agudas: 
                              </h3>
                              <v-radio-group
                                v-model="rpatologias"
                                row
                                :rules="[rules.required]"
                                class="mt-1"
                                >
                                <v-radio
                                    label="Sim"
                                    value="Sim"
                                ></v-radio>
                                <v-radio
                                    label="Não"
                                    value="Não"
                                ></v-radio>
                                </v-radio-group>
                              <h3
                                class="font-weight-medium"
                              >
                                Se sim: 
                              </h3>

                              <v-row>

                                <v-col
                                cols="12"
                                md="6"
                                >
                                  <v-text-field
                                    outlined
                                      ref="patologias"
                                      v-model="patologias"
                                      label="Quais?"
                                      required
                                      dense
                                    ></v-text-field>
                                </v-col>
                              </v-row>

                              <h3
                                class=" mt-6 font-weight-medium"
                              >
                                Febre: 
                              </h3>
                              <v-radio-group
                                v-model="rfebre"
                                row
                                :rules="[rules.required]"
                                class="mt-1"
                                >
                                <v-radio
                                    label="Sim"
                                    value="Sim"
                                ></v-radio>
                                <v-radio
                                    label="Não"
                                    value="Não"
                                ></v-radio>
                                </v-radio-group>
                              
                            </v-col>
                          </v-row>  
                        </v-col>
                    </v-row>

                  <v-btn text
                  @click="e1 = 3">
                    Voltar
                  </v-btn>
                  <v-btn
                    color="primary"
                    @click="e1 = 5"
                  >
                    Continuar
                  </v-btn>

                  
                </v-stepper-content>

                   <v-stepper-content step="5">
                  <div class="intro-info mb-16">
                      <v-alert
                        icon="mdi-information-outline"
                        border="left"
                        text
                        type="info"
                      >
                        <p>Preencha o formulário e aguarde a nossa confirmação.</p>
                        <p>Todos os campos são de preenchimento obrigatório, exceto os assinalados com “opcional”.</p>
                      </v-alert>
                    </div>
                    
                    <h2 
                      class="display-1  ml-6 mt-6 mb-3 font-weight-light"
                    >
                      A sua Reserva: 
                    </h2>

                    <v-row>
                      <v-col
                        cols="12"
                        md="12">
                        <v-row>
                          <v-col
                            cols="12"
                            md="6">

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Centro: 
                              </h3>
                              <p
                                class=" font-weight-light  mb-0"
                              >
                                 {{centermassage}} {{centerrehab}}
                              </p>
                            
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Serviço: 
                              </h3>
                              <p
                                class=" font-weight-light"
                              >
                                {{servicemassage}} {{servicerehab}}
                              </p>
                            </v-col>
                          </v-row>  
                        </v-col>
                    </v-row>



                    <h2 
                      class="display-1  ml-6 mt-6 mb-3 font-weight-light"
                    >
                      Disponibilidade 
                    </h2>

                    <v-row>
                      <v-col
                        cols="12"
                        md="12">
                        <v-row>
                          <v-col
                            cols="12"
                            md="6">

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Marcar apartir de: 
                              </h3>
                              <p
                                class=" font-weight-light  mb-0"
                              >
                                {{pickerfrom}}
                              </p>
                            
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Dias da semana:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{selecteddays}}
                              </p>

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Periodos do dia:
                              </h3>
                              <p
                                class=" font-weight-light"
                              >
                                {{selectedhours}}
                              </p>
                            </v-col>
                          </v-row>  
                        </v-col>
                    </v-row>


                    <h2 
                      class="display-1  ml-6 mt-6 mb-3 font-weight-light"
                    >
                      Dados pessoais
                    </h2>

                    <v-row>
                      <v-col
                        cols="12"
                        md="12">
                        <v-row>
                          <v-col
                            cols="12"
                            md="6">

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Nome: 
                              </h3>
                              <p
                                class=" font-weight-light  mb-0"
                              >
                                {{firstname}} 
                              </p>
                            
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Apelido / Sobrenome:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{surname}}
                              </p>

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Email:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{email}}
                              </p>
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Data de nascimento:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                 {{birth}}
                              </p>
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Telemóvel:
                              </h3>
                              <p
                                class=" font-weight-light"
                              >
                                {{telemovel}}
                              </p>
                            </v-col>
                          </v-row>  
                        </v-col>
                    </v-row>



                    <h2 
                      class="display-1  ml-6 mt-6 mb-3 font-weight-light"
                    >
                      Quadro clinico
                    </h2>

                    <v-row>
                      <v-col
                        cols="12"
                        md="12">
                        <v-row>
                          <v-col
                            cols="12"
                            md="6">

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Dores: 
                              </h3>
                              <p
                                class=" font-weight-light  mb-0"
                              >
                                {{rdores}}. {{dorlocal}}. {{dorduracao}}
                              </p>
                            
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Cansaço muscular:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{rcans}}
                              </p>

                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Alergias:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{ralergias}}. {{alergias}}
                              </p>
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Ansiedade:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{ransiedade}}
                              </p>
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Patologias agudas:
                              </h3>
                              <p
                                class=" font-weight-light mb-0"
                              >
                                {{rpatologias}}. {{patologias}}
                              </p>
                              <h3
                                class=" mt-0 font-weight-medium"
                              >
                                Febre:
                              </h3>
                              <p
                                class=" font-weight-light"
                              >
                                {{rfebre}}
                              </p>
                            </v-col>
                          </v-row>  
                        </v-col>
                    </v-row>

                  <v-btn 
                  text 
                  @click="e1 = 4">
                    Voltar
                  </v-btn>
                  <v-btn
                    color="primary"
                    @click="confirm"

                  >
                    Confirmar
                  </v-btn>

                  
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>   
</template>



<script>
import{ fb, db } from '@/firebase.js';
  export default {
    name: 'Bookings',
    
    data () {
      return {
       
c:false,
valid:false,
         picker: null,
        e1: 1,
        value: null,


        servicemassage:'', 
        centermassage:'',
        servicerehab:'',
        centerrehab:'',
        pickerfrom:'',
        selecteddays: [],
        selectedhours: [],
        firstname:'',
        surname:'',
        email:'',
        birth:'',
        telemovel:'',
        rdores:'',
        dorlocal:'',
        dorduracao:'',
        rcans:'',
        ralergias:'',
        alergias:'',
        ransiedade:'',
        rpatologias:'',
        patologias:'',
        rfebre:'',
        

        modal_1: true,
        modal_2: false,
        modal_4: false,
        madal_5: false,

        rules: {
        required: (value) => !!value || "Obrigatório.",
        min: (v) => v.length >= 8 || "Min. 8 caracters",
        uplength: (v) => /[A-Z]+/.test(v) || 'Deve ter um carácter maiúsculo',
        num:(v) => /[0-9]+/.test(v) || 'Deve ter um número',
        char: (v) =>  /([._!@$%])/.test(v) || 'Deve ter um carácter especial [._!@#$%]'
      },
      
        
        
        select: ['Selecione o centro ou clinica'],
        massages:[],
        rehabilitations:[],
        
        items: ['Centro BienSaúde Lisboa'],
         states: [
          { name: 'Florida', abbr: 'FL', id: 1 },
          { name: 'Georgia', abbr: 'GA', id: 2 },
          { name: 'Nebraska', abbr: 'NE', id: 3 },
          { name: 'California', abbr: 'CA', id: 4 },
          { name: 'New York', abbr: 'NY', id: 5 },
        ],

      date: new Date()
      }
    },

    created() {

        var user = fb.auth().currentUser
     //  this.email = user.email;
        var docRef = db.collection("profiles").doc(user.uid);
        docRef.get().then((doc) => {

                  this.email = doc.data().email
                  this.birth = doc.data().birth
                  this.firstname = doc.data().name
                  this.surname = doc.data().surname
                  this.mobile = doc.data().mobile         

        })



        
       try{
        db.collection("massages").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                this.massages.push(
                  doc.data().title
                )
          }) 
      })
    
      db.collection("rehabilitations").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                    this.rehabilitations.push(
                      doc.data().title
                    )
              }) 
          })
    }catch(e){
      console.log(e)
    }
  },
  methods: {
  confirm () {
var user = fb.auth().currentUser

db.collection("bookings").add({
        dores: this.rdores+". " +this.dorlocal+ ". "+ this.dorduracao,
        center: this.centermassage + this.centerrehab,
        alergias: this.ralergias + this.alergias,
        service: this.servicerehab + this.servicemassage,
        favoriteDays: this.selecteddays,
        favoriteHours: this.selectedhours,
        dateFrom: this.pickerfrom,
        utenteName: this.firstname,
        utenteSurname: this.surname,
        utentEmail: this.email,
        utenteNumber: this.telemovel,
        utenteBirth: this.birth,      
        cansMusc: this.rcans,
        ansiedade: this.ransiedade,
        patologias: this.rpatologias + ". "+this.patologias, 
        febre: this.rfebre,
        status: "Em confirmação",
        confirmateDay:'',
        technical:'',
        userId: user.uid,
        
        bookingday: Date.now() ,
})
.then((docRef) => {
   this.$router.replace('/bookings')
  this.c = true,
  
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

  }
  }
        
  }
</script>

<style>

h2{
  font-size: 35px;
}
.cbx{
  font-size: 16px;
}
</style>
