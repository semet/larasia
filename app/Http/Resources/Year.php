<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class Year extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'start_date' => Carbon::parse($this->start_date)->format('d F Y'),
            'end_date'   => Carbon::parse($this->end_date)->format('d F Y'),
            'name'       => $this->name,
            'active'     => $this->active,
        ];
    }
}
