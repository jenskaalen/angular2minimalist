import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmerConfiguration {
    defaultText: string = `Are you sure?`;
    htmlBase: string = `<div class="confirm-overlay">
    <style>
        .confirm-overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .confirm-box{
            min-width: 250px;
            min-height: 100px;
            background-color: white;
            flex-direction: column;
            display: flex;
            justify-content: space-around;
        }
        .confirm-text { 
            width: 100%;
            padding: 5px;
            margin: 5px;
            text-align: center;
            flex-grow: 1;
        }
        .confirm-box button { 
            margin: 1em;
        }
        .button-group { 
            text-align: center;
        }
    </style>
    <div class="confirm-box">
    <div class="confirm-text"></div>
    <div class="button-group">
    <button name="cancel">No</button>
    <button name="accept">Yes</button>
    </div>
    </div>
    </div>`
}
