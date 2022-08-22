'use strict'
import Tonic from '@socketsupply/tonic'

export default class AppSprite extends Tonic {
  render () {
    return this.html`
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="tonic--svg" viewBox="0 0 100 100">
        <symbol id="bookmark" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50,73.5L20.2,94.8c-1.5,0-2.1-0.5-2.1-2.1v-81c0-3.5,3.2-6.4,7.5-6.4h49c4.3,0,7.5,2.9,7.5,6.4v80.9c0,1.6-0.6,2.1-2.1,2.1
            L50,73.5z"/>
        </symbol>

        <symbol id="copy" viewBox="0 0 100 100">
          <path stroke="currentColor" d="M80.36,12H38.42a7.64,7.64,0,0,0-7.64,7.64V30.78H19.64A7.64,7.64,0,0,0,12,38.41v42A7.64,7.64,0,0,0,19.64,88h42a7.64,7.64,0,0,0,7.63-7.64V69.22H80.36A7.64,7.64,0,0,0,88,61.58V19.64A7.64,7.64,0,0,0,80.36,12ZM65.22,67.16s0,0,0,.06,0,0,0,.06V80.36A3.64,3.64,0,0,1,61.59,84h-42A3.64,3.64,0,0,1,16,80.36v-42a3.64,3.64,0,0,1,3.64-3.63h42a3.64,3.64,0,0,1,3.63,3.63ZM84,61.58a3.64,3.64,0,0,1-3.64,3.64H69.22V38.41a7.64,7.64,0,0,0-7.63-7.63H34.78V19.64A3.64,3.64,0,0,1,38.42,16H80.36A3.64,3.64,0,0,1,84,19.64Z"></path>
        </symbol>

        <symbol id="trash" viewBox="0 0 100 100">
          <path stroke="currentColor" fill="currentColor" d="M90,24.3v-4.9H66.3L62.5,6H36.7l-3.8,13.3H9.2v5.3h8.4l6.5,70.2h51l6.5-70.6H90z M40.6,11h18l2.4,8.3H38.2L40.6,11z"/>
        </symbol>

        <symbol id="lock" viewBox="0 0 100 100">
          <path fill="currentColor" d="M26.8,97.7h46.5c6.3,0,9.4-3.1,9.4-10V51.9c0-6.2-2.5-9.3-7.8-9.9V29.6C74.9,11.2,62.8,2.3,50,2.3s-24.9,8.9-24.9,27.3v12.5
            c-4.8,0.7-7.8,3.9-7.8,9.6v35.8C17.5,94.6,20.5,97.7,26.8,97.7z M33.1,28.7c0-12.3,7.9-18.8,17-18.8s17,6.5,17,18.8V42h-34V28.7z"/>
        </symbol>

        <symbol id="search" viewBox="0 0 100 100">
          <path d="M55.4,18c-13.8,0-25.1,11.2-25.1,25.1c0,5.6,1.9,10.7,5,14.9L17.1,76.2l5.2,5.2l18.2-18.2c4.2,3.1,9.3,5,14.9,5
            c13.8,0,25.1-11.2,25.1-25.1S69.3,18,55.4,18z M55.4,60.8c-9.8,0-17.8-8-17.8-17.8s8-17.8,17.8-17.8s17.8,8,17.8,17.8
            S65.2,60.8,55.4,60.8z"/>
        </symbol>

        <symbol id="checked-circle" viewBox="0 0 100 100">
          <path d="M49.88,1C22.88,1,1,22.88,1,49.88s21.88,48.88,48.88,48.88s48.88-21.88,48.88-48.88S76.87,1,49.88,1z M42.54,73.64
            L17.1,48.2l4.95-4.95l20.5,20.5L77.7,28.58l4.95,4.95L42.54,73.64z"/>
        </symbol>

        <symbol id="checked" viewBox="0 0 100 100">
          <path fill="currentColor" d="M79.7,1H21.3C10.4,1,1.5,9.9,1.5,20.8v58.4C1.5,90.1,10.4,99,21.3,99h58.4c10.9,0,19.8-8.9,19.8-19.8V20.8C99.5,9.9,90.6,1,79.7,1z M93.3,79.3c0,7.5-6.1,13.6-13.6,13.6H21.3c-7.5,0-13.6-6.1-13.6-13.6V20.9c0-7.5,6.1-13.6,13.6-13.6V7.2h58.4c7.5,0,13.6,6.1,13.6,13.6V79.3z"/>
          <polygon points="44,61.7 23.4,41.1 17.5,47 44,73.5 85.1,32.4 79.2,26.5 "/>
        </symbol>

        <symbol id="close" viewBox="0 0 100 100">
          <path d="M80.7,22.6l-3.5-3.5c-0.1-0.1-0.3-0.1-0.4,0L50,45.9L23.2,19.1c-0.1-0.1-0.3-0.1-0.4,0l-3.5,3.5c-0.1,0.1-0.1,0.3,0,0.4
            l26.8,26.8L19.3,76.6c-0.1,0.1-0.1,0.3,0,0.4l3.5,3.5c0,0,0.1,0.1,0.2,0.1s0.1,0,0.2-0.1L50,53.6l25.9,25.9c0.1,0.1,0.3,0.1,0.4,0
            l3.5-3.5c0.1-0.1,0.1-0.3,0-0.4L53.9,49.8l26.8-26.8C80.8,22.8,80.8,22.7,80.7,22.6z"/>
        </symbol>

        <symbol id="link" viewBox="0 0 100 100">
          <path fill="currentColor" d="M35,68.7h-15C9.7,68.7,1.4,60.3,1.4,50s8.4-18.7,18.7-18.7h22.5c10.3,0,18.7,8.4,18.7,18.7c0,2.1-1.7,3.7-3.7,3.7
            s-3.7-1.7-3.7-3.7c0-6.2-5-11.2-11.2-11.2H20.1c-6.2,0-11.2,5-11.2,11.2s5,11.2,11.2,11.2h15c2.1,0,3.7,1.7,3.7,3.7
            S37.1,68.7,35,68.7z"/>
          <path fill="currentColor" d="M79.9,68.7H57.5c-10.3,0-18.7-8.4-18.7-18.7c0-2.1,1.7-3.7,3.7-3.7s3.7,1.7,3.7,3.7c0,6.2,5,11.2,11.2,11.2h22.5
            c6.2,0,11.2-5,11.2-11.2s-5-11.2-11.2-11.2H65c-2.1,0-3.7-1.7-3.7-3.7s1.7-3.7,3.7-3.7h15c10.3,0,18.7,8.4,18.7,18.7
            S90.3,68.7,79.9,68.7z"/>
        </symbol>

        <symbol id="refresh" viewBox="0 0 100 100">
          <path fill="currentColor" d="M64.3,76c-0.2-0.2-0.3-0.3-0.5-0.5c-0.2,0-0.5,0-0.6,0l-0.6,0.3l0,0c-3.3,1.6-6.8,2.5-10.6,2.9c-0.8,0-1.6,0.2-2.4,0.2
            c-15.9,0.2-29-13-29-29c0-2.4,0.3-4.6,0.8-7.1l4.1,8.7c0.2,0.2,0.3,0.3,0.5,0.5c0.2,0,0.5,0,0.6,0l4.3-1.9c0.3-0.2,0.6-0.6,0.3-1
            l-7.9-17.6C23,31,22.5,30.7,22.2,31L4.4,39.1c-0.2,0.2-0.3,0.3-0.5,0.5c0,0.2,0,0.5,0,0.6L6,44.3c0.2,0.5,0.6,0.6,1,0.3l9-4.1
            c-0.8,3-1.3,6-1.3,9.5c0,19.5,15.9,35,35,35c0.8,0,1.7,0,2.7-0.2c4.4-0.3,8.9-1.6,12.7-3.5l0.6-0.3c0.3-0.2,0.5-0.6,0.3-1L64.3,76z
            "/>
          <path fill="currentColor" d="M95.9,58.7l-2.1-4.1c-0.2-0.5-0.6-0.6-1-0.5L84,58.2c0.8-2.5,1-5.4,1-8.2c0-19.5-15.9-35-35-35c-1.7,0-3.5,0.2-5.4,0.5
            c0,0,0,0-0.2,0l-1.1,0.2c0,0,0,0-0.2,0c-3.8,0.8-7.3,2.1-10.6,4l-0.6,0.2c-0.3,0.2-0.5,0.6-0.3,1l2.4,4.1c0.2,0.2,0.3,0.3,0.5,0.3
            s0.5,0,0.6,0l0.6-0.3c2.9-1.6,6-2.7,9.4-3.3c1.7-0.3,3.5-0.5,5.1-0.5c16,0,29.2,13.2,29.2,29.2c0,2.2-0.3,4.3-0.8,6.3l-4.1-8.9
            c-0.2-0.2-0.3-0.3-0.5-0.5c-0.2,0-0.5,0-0.6,0l-4.3,2.1c-0.3,0.2-0.6,0.6-0.3,1l8.2,17.8c0.2,0.3,0.5,0.5,0.8,0.5
            c0.2,0,0.2,0,0.3,0l17.6-8.1c0.2-0.2,0.3-0.3,0.5-0.5C95.9,59.2,95.9,58.9,95.9,58.7z"/>
        </symbol>

        <symbol id="theme" viewBox="0 0 100 100">
          <path d="M51.2,2.6C25.3,2.6,4.2,23.7,4.2,49.6c0,25.9,21.1,46.9,46.9,46.9s46.9-21.1,46.9-46.9
            C98.1,23.7,77.1,2.6,51.2,2.6z M10.2,49.6C10.2,27,28.6,8.6,51.2,8.6v81.9C28.6,90.5,10.2,72.2,10.2,49.6z"/>
        </symbol>

        <symbol id="folder" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.6,82.2c12,0,24.1,0,36.1,0c2.1,0,2.6-0.6,2.6-2.6c-0.1-16.1,0-32.2,0-48.2c0-2.6,0-2.6-2.7-2.6c-9.8,0-19.5,0-29.3-0.1
            c-1.1,0-2.3-0.6-3.1-1.3c-2.4-2.2-4.6-4.7-7.1-6.9c-0.9-0.8-2.2-1.4-3.3-1.4c-10-0.1-19.9,0-29.9-0.1c-1.9,0-2.3,0.7-2.3,2.4
            c0.1,19.4,0.1,38.9,0,58.3c0,2,0.6,2.5,2.5,2.5C26.3,82.2,38.4,82.2,50.6,82.2z"/>
        </symbol>

        <symbol id="folder-icon" viewBox="0 0 100 100">
          <path stroke-width="4" stroke="currentColor" fill="transparent" d="M86.1,28.6v-1.5c0-1.1-0.9-2-2-2H46.8l0,0"/>
          <path stroke-width="3" stroke="currentColor" fill="transparent" d="M88.5,28.6H53.2c-1.5,0-2.9-0.5-4-1.4L42,20.7c-0.8-0.6-1.7-0.9-2.7-0.9H11.5c-1.1,0-2,0.9-2,2v56.5
            c0,1.1,0.9,2,2,2h77c1.1,0,2-0.9,2-2V30.6C90.5,29.5,89.6,28.6,88.5,28.6z"/>
        </symbol>

        <symbol id="folder-open" viewBox="0 0 100 100">
          <path fill="currentColor" d="M14.1,78.6c-0.1,0-0.2-0.1-0.4-0.1c2.8-12.8,5.7-25.6,8.5-38.5c0.3-1.2,0.9-1.5,2-1.4c4,0,8,0,12.1,0c12.4,0,24.8,0,37.2,0
            c1.5,0,2.5-0.2,2.4-2c-0.1-1.7,0-3.5,0.1-5.2c0.1-1.8-0.5-2.6-2.5-2.6c-9.1,0.1-18.1,0.1-27.2,0c-1.1,0-2.3-0.6-3.1-1.3
            c-2.5-2.3-4.8-4.8-7.4-7.1c-0.7-0.6-1.7-1.1-2.6-1.1c-6.2-0.1-12.3,0-18.5-0.1c-1.4,0-1.9,0.4-1.9,1.8c0,19.6,0,39.2,0,58.7
            c0,1.8,0.6,2.3,2.4,2.3c19.5-0.1,39-0.1,58.5,0c1.5,0,2.3-0.4,2.8-1.9c4.3-11.6,8.6-23.2,13-34.9c0.2-0.6,0.3-1.2,0.5-1.9
            c-0.7-0.1-1.1-0.1-1.5-0.1c-19.9,0-39.7,0-59.6,0c-1.3,0-1.9,0.5-2.3,1.7c-2,5.5-4.1,10.9-6.1,16.4C18.4,67,16.3,72.8,14.1,78.6z"
            />
        </symbol>

        <symbol id="file" viewBox="0 0 100 100">
          <path fill="currentColor" d="M19.5,14V86c0,1.7,1.4,3.2,3.2,3.2h54.5c1.7,0,3.2-1.4,3.2-3.2V14c0-1.7-1.4-3.2-3.2-3.2H22.7C21,10.9,19.5,12.2,19.5,14z
             M69.8,72.2H30.3c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h39.5c0.3,0,0.5,0.2,0.5,0.5C70.2,72,70.1,72.2,69.8,72.2z M69.8,61.3H30.3
            c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h39.5c0.3,0,0.5,0.2,0.5,0.5C70.2,61,70.1,61.3,69.8,61.3z M69.8,50.4H30.3
            c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h39.5c0.3,0,0.5,0.2,0.5,0.5C70.2,50.2,70.1,50.4,69.8,50.4z M69.8,39.5H30.3
            c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h39.5c0.3,0,0.5,0.2,0.5,0.5C70.2,39.4,70.1,39.5,69.8,39.5z M69.8,28.7H43.3
            c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h26.4c0.3,0,0.5,0.2,0.5,0.5C70.2,28.4,70.1,28.7,69.8,28.7z"/>
        </symbol>

        <symbol id="file-outline" viewBox="0 0 100 100">
          <path stroke="currentColor" fill="transparent" d="M67.8,27.6c-1.4,0-2.6-1.2-2.6-2.6V11.9c-0.2-0.2-0.3-0.3-0.3-0.3H24.8c-1.4,0-2.6,1.2-2.6,2.6v73.1
            c0,1.4,1.2,2.6,2.6,2.6h53.9c1.4,0,2.6-1.2,2.6-2.6V27.9c0,0-0.1-0.1-0.3-0.3H67.8z"/>
          <line stroke="currentColor" x1="65.3" y1="11.9" x2="81" y2="27.6"/>
        </symbol>

        <symbol id="settings" viewBox="0 0 100 100">
          <path fill="currentColor" d="M85.7,52.2c-1.1-0.5-2.1-1.1-3.2-1.7L82,50.1c-1-0.5-1.9-1-2.8-1.5c-0.4-0.2-0.7-0.4-0.8-1.2c-0.1-1.1-0.4-2.6-1-4.1
            c-0.3-0.9-0.2-1.3,0.2-1.9c0.8-1,1.5-2.1,2.3-3.2c0.7-0.9,1.3-1.9,2-2.7c1.4-1.9,0.3-3.4-0.1-4c-0.5-0.5-1-1.2-1.5-1.9l-3.7-4.7
            c-0.8-1-2.1-1.3-3.3-0.9l-2.2,0.9c-1.6,0.7-3.3,1.4-4.9,2.1c-0.5,0.2-0.9,0.2-1.5-0.1c-1.2-0.7-2.6-1.4-4.1-2
            c-0.7-0.2-0.9-0.5-1.1-1.2c-0.3-1.2-0.7-2.4-1-3.6l-0.1-0.4c-0.2-0.9-0.5-1.7-0.8-2.6c-0.8-2.7-3.3-2.4-4.6-2.2h-0.2
            c-1.7,0.2-3.7,0.2-5.6-0.1c-2.7-0.4-3.7,1-4,2.3c-0.3,1.2-0.7,2.4-1,3.5l-0.9,3.3c-0.1,0.4-0.3,0.8-0.9,1c-1.5,0.7-2.9,1.3-4.4,2.1
            c-0.5,0.2-1,0.3-1.5,0l-7.8-3.2c-0.1,0-0.2,0-0.2,0L25.9,24c-1.1,0.3-1.7,1.2-2.2,1.7c-0.1,0.1-0.1,0.1-0.2,0.2
            c-1.1,1.3-2.2,2.6-3.2,4l-2.1,2.6c-0.1,0.1-0.7,0.9-0.1,1.6c0.5,0.8,2,2.7,2,2.7c1.1,1.5,2.1,2.9,3.2,4.4c0.3,0.4,0.4,0.9,0.2,1.6
            c-0.4,1.2-0.7,2.4-1,4.1c-0.1,0.9-0.4,1.2-0.9,1.4c-1.3,0.7-2.5,1.4-3.8,2.1l-0.2,0.1c-0.8,0.4-1.6,0.9-2.4,1.3s-2.3,1.5-1.3,4
            c0.9,2.2,1.4,4.5,1.5,6.9c0.2,2.6,2.1,2.9,2.8,3.1l3.4,0.2c1.4,0.1,2.8,0.1,4.1,0.2c0.5,0,0.9,0.2,1.2,0.7c1,1.3,2,2.5,2.9,3.7
            c0.3,0.4,0.4,0.8,0.4,1.2L30,73.5c-0.3,2-0.7,3.9-1,5.8c-0.2,1.4,0.3,2.6,1.6,3.3c2.5,1.2,5,2.4,7.5,3.6c1.3,0.7,2.7,0.3,3.7-0.8
            c1.7-2,3.4-3.8,5.1-5.8c0.2-0.2,0.5-0.3,0.8-0.3c1.4,0,3.2,0.1,5,0c0.7,0,1,0.2,1.2,0.4l2.1,2.3c1,1.1,2,2.2,2.9,3.4
            c0.3,0.4,1.1,1.1,2.3,1.1c0.4,0,1-0.1,1.4-0.3c2.9-1.4,5.2-2.5,7.4-3.6c1.4-0.7,2.1-2,1.9-3.5c-0.2-1.4-0.5-2.8-0.8-4.4l-0.5-2.8
            c0-0.2-0.1-0.5,0.5-1.2c1.1-1.1,2-2.2,2.6-3.4c0.4-0.8,0.8-0.8,1.1-0.9c2.5-0.1,5.1-0.3,7.6-0.4c1.9-0.1,2.9-1.2,3.1-3.5
            c0.1-2.1,0.7-4.1,1.4-6.2C88,54,86.9,52.7,85.7,52.2z M50.5,62.3c-2.9,0-5.6-1.1-7.6-3.2c-2.1-2.1-3.2-4.8-3.2-7.6
            c0-2.9,1.1-5.6,3.2-7.6c2.1-2.1,4.8-3.2,7.6-3.2s5.6,1.1,7.6,3.2c2.1,2.1,3.2,4.8,3.2,7.6C61.3,57.4,56.4,62.3,50.5,62.3z"/>
        </symbol>

        <symbol id="export" viewBox="0 0 100 100">
          <line fill="none" stroke="currentColor" stroke-width="6" stroke-miterlimit="10" x1="50.8" y1="17.4" x2="50.8" y2="72"/>
          <line fill="none" stroke="currentColor" stroke-width="6" stroke-miterlimit="10" x1="80.2" y1="83.7" x2="20.9" y2="83.7"/>
          <polyline fill="none" stroke="currentColor" stroke-width="6" stroke-miterlimit="10" points="28.2,40 50.8,17.5 73.3,40   "/>
        </symbol>

        <symbol id="delete" viewBox="0 0 100 100">
          <polygon fill="currentColor" points="75,29 71,25 50,46 29,25 25,29 46,50 25,71 29,75 50,54 71,75 75,71 54,50 "/>
        </symbol>

        <symbol id="std-arrow-up-right" viewBox="0 0 100 100">
          <path fill="currentColor" d="M85.1,68.7L84.9,17c0-0.7-0.5-1.2-1.2-1.2H32c-0.7,0-1.2,0.5-1.2,1.2c0,0.6,0.5,1.1,1.3,1.1h29.5
            l19.8-0.2l-7.7,7.5l-58,58.1c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.6,0.5,1.2,1.2,1.2c0.3,0,0.5-0.1,0.8-0.4l58-58l7.4-7.6v14.7v34.5
            c0,0.7,0.5,1.3,1.2,1.3C84.6,70,85.1,69.4,85.1,68.7z"/>
        </symbol>

        <symbol id="package" viewBox="0 0 100 100">
          <path fill="none" stroke="currentColor" stroke-width="2"
            d="M89.2,26.3L89.2,26.3L70,14.9L50.9,3.4l0,0c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0.1l0,0l-38.5,23l0,0l-0.1,0.1
              c0,0,0,0,0,0.1c0,0.1-0.1,0.1-0.1,0.2v46c0,0.2,0.1,0.3,0.2,0.4l38.3,23l0,0c0.1,0,0.1,0.1,0.2,0.1s0.2,0,0.2-0.1l0,0l38.5-23
              c0.2-0.1,0.2-0.3,0.2-0.4v-46c0-0.1,0-0.2-0.1-0.2c0,0,0,0,0-0.1C89.3,26.5,89.2,26.5,89.2,26.3z M50.5,4.5l18.1,10.8L31.5,37.6
              L13.4,26.8L50.5,4.5z M87.7,26.8L50.5,49.1L32.5,38.3L69.6,16L87.7,26.8z M12.8,27.8L50,50.1v44.6L12.8,72.4V27.8z M51.1,94.7V50.1
              l37.2-22.3v44.6L51.1,94.7z"/>
        </symbol>

        <symbol id="info" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.1,6.7C26.3,6.7,6.9,26.2,6.9,50s19.4,43.2,43.2,43.2c23.8,0,43.2-19.5,43.2-43.3C93.3,26.1,74,6.7,50.1,6.7z M53.9,76.4h-7.6V68h7.6V76.4z M53.9,60.5h-7.6V25.6h7.6V60.5z"></path>
        </symbol>

        <symbol id="danger" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.1,6.7C26.3,6.7,6.9,26.2,6.9,50s19.4,43.2,43.2,43.2c23.8,0,43.2-19.5,43.2-43.3C93.3,26.1,74,6.7,50.1,6.7z M53.9,76.4h-7.6V68h7.6V76.4z M53.9,60.5h-7.6V25.6h7.6V60.5z"></path>
        </symbol>

        <symbol id="warning" viewBox="0 0 100 100">
          <path fill="currentColor" d="M98.6,86.6l-46-79.7c-1.2-2-4-2-5.2,0l-46,79.7c-1.2,2,0.3,4.5,2.6,4.5h92C98.3,91.1,99.8,88.6,98.6,86.6z M53.9,80.4h-7.6V72h7.6V80.4z M53.9,64.5h-7.6V29.6h7.6V64.5z"></path>
        </symbol>
    `
  }
}
