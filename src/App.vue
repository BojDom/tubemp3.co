<template>
	<div id="app">
		<div class="header-wrapper">
			<div class="header">
				<div class="scrolling-header" :class="{opened:srcOpen}">
					<search-bar @src="srcOpen=false"></search-bar>
					<div class="header-btn">
						<div class="ttransition tzoom" @click="srcOpen = ! srcOpen">
							<i class="mdi f fc mdi-magnify"></i>
						</div>
						<div id="logo">
							<router-link to="/">
								<img src="/public/img/logo.jpg" />
							</router-link>
						</div>
						<div class="ttransition tzoom">
							<div class="fullsize f fc nowrap login-icon">
							<router-link to="/profile">	
								<badge/>
								<img v-if="usr.img" :src="usr.img"/>
								<i v-else class="f fc nowrap mdi mdi-home-account" style="display:inline-flex" ></i>
							</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="main nowrap f fc">
			<auto-complete v-show="srcOpen"></auto-complete>
			<transition name="fade">
				<reconnect v-if="!isConnected"></reconnect>
			</transition>
			<transition name="fade">
				<noQuota v-if="noQuota"></noQuota>
			</transition>

			<div class="page f fc">
				
				<social-sharing  inline-template>
				  <span class="social-buttons f ja">
					  
				      <network network="facebook">
				        <button><i class="mdi mdi-facebook"></i></button>
				      </network>
				      <network network="whatsapp">
				        <button><i class="mdi mdi-whatsapp"></i></button>
				      </network>
				  </span>
				</social-sharing>
				<transition>
					<router-view></router-view>
				</transition>
			</div>
		</div>
	
		<div id="footer" class="f ja">
			<a href="https://github.com/BojDom/tubemp3.co">
				<img src="/public/img/git.svg"/>
			</a>
			<a id="changeLang" @click="langOpened=!langOpened"> <img :src="flag($i18n.locale)"/></a>
			<a href="https://m.me/ddoremix">
				<img src="/public/messenger.png"/>
			</a>
		</div>
		<lang-component :langOpened="langOpened" @change="langOpened=false"/>
		
	</div>
</template>

<script>
import {autoPlay} from 'es6-tween'

import searchBar from './components/srcBar.vue';
import noQuota from './components/noQuota.vue';
import reconnect from './components/reconnect.vue';
import { mapState,mapGetters } from 'vuex';
import autoComplete from './components/suggestions.vue'
import badge from './components/badge'
import langComponent from './components/lang'
import socialSharing from 'vue-social-sharing'
export default {
	components: { reconnect,	searchBar,		autoComplete,	noQuota, langComponent,	socialSharing,	badge},
	data() {
		return {
			q: "",
			fbUrl:'',
			noQuota:false,
			srcOpen: false,
			langOpened:false,
			subs:{}
		}
	},
	sockets:{
		add:function(v){
			this.$store.commit('addThumbnail',v)
		},
		noQuota:function(){
			this.noQuota=true;
		}
	},
	beforeMount() {
		//if (process.env.NODE_ENV=='production') window.console.log=console.log=function(){}
	},

	mounted(){
		autoPlay(true)
	},
	methods: {
		flag(l){
			if (l == 'en') l = 'gb'
			return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/'+l+'.svg'
		}
	},
	computed: {
		...mapState(['connState','usr']),
		...mapState(['isConnected'])
	},
	watch: {
		"$route":function(){
			this.srcOpen=false;
			this.langOpened=false;
		}
	},
	beforeDestroy() {

		this.$socket.disconnect();
	},
	metaInfo(){
		return {
			title:this.$t('homeTitle'),
			meta: [
		        { vmid: 'og:image', property: 'og:image', content: LOGO },
		        { vmid: 'description', property: 'description', content: this.$t('homeDescription') },
		        { vmid: 'og:description', property: 'og:description', content: this.$t('homeDescription') }
		      ]
		}
	}
}
</script>

<style lang="less">
//@import '../node_modules/vue2-animate/src/vue2-animate.less';
@theme: "./less/themes/dev";
@import "@{theme}";
@import './less/main.less';
.header-wrapper {
	height: @headerHeight;
	background: @headerBg;
	position: absolute;
	z-index: 2;
	justify-content: space-around;
	width: 100%;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 10px 10%;
	text-align: center;
	.header{
		margin: 0 auto;
		max-width: 500px;
		overflow: hidden;
	}
	.scrolling-header {
		white-space: nowrap;
		transition:transform .3s ease-out;
		transform: translateX(-100%);

		&>div {
			display: inline-flex;
			justify-content:space-between;
			width: 100%;
		}
		&.opened {
			transform: translateX(0%);
		}
	}
	.header,.scrolling-header, .header-btn {
		height: @headerHeight;
	}
	//.header-btn {

	//}
	.header-btn {
		&>div {
				flex-grow: 1;
				width: 0;
				height: 80%;
				margin: 0 18px;
				i,a{
					color:@textColor;
					height: 100%;
					font-size: 2.5rem;
					width:100%;
					justify-content: space-around;
		            background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(255, 255, 255, 0.07) 100%);
		            border-bottom:2px solid hsla(0, 0%, 100%, .24);
					span {font-size:1.3rem;}
					&:hover {
						text-shadow: 2px 2px 10px white, -2px -2px 10px white;
						cursor: pointer;
					}
				}
			}
	}
	#logo {
		flex-grow: 3;
		a {
			display: block;
			height: 100%;
		}
		img {
			height: 100%;
		}
	}
	.login-icon {
		position: relative;
		a{display: flex;align-items: center;justify-content: center;}
		i {margin-bottom: -2px;}
		img {
			max-height: 80px;
			max-width: 60px;
			border-radius: 8px;
		}
	}
}

.main {
	height: @pageHeight;
	padding-top: @headerHeight;
	justify-content:flex-start;
}

.page {
	height: 100%;
	flex-wrap: nowrap;
	max-width: 640px;
	margin: 0 auto;
	&>div {
		height: 100%;
		align-items:flex-start;
		overflow-y:scroll;
		overflow-x: hidden;;
	}
}


.results {
	margin:0 auto;
	align-content: flex-start;
	flex-wrap:nowrap;
	overflow-x: hidden;

}

.ffade-enter-active, .ffade-leave-active {
  transition: all .5s
}
.ffade-enter, .ffade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform:scale(0);
  height: 0;
}

#footer {
	height: @footerHeight;
	position: fixed;
	bottom:0;
	left:0;
	background: linear-gradient(lighten(@color1,20%) 0%, @color1 50%,lighten(@color1,20%) 100%);
	text-align: center;
	width:100%;
	a {color:#fff;flex-grow:1;width:0;white-space: nowrap;}
	img {height: 40px;}
	#changeLang {
		img {height: 30px;}		
	}
}
.social-buttons  {width:160px;button  {width:40px;height: 40px;border-radius: 4px; i {font-size: 26px;color:#fff;text-shadow: 1px 1px 11px #fff}}}
[data-link="#share-facebook"] button {background:#3b5998}
[data-action="share/whatsapp/share"] button {background:#25d366}
</style>
